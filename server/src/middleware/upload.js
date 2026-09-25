import path from 'path';
import multer from 'multer';
import { config } from '../config/index.js';

export const MAX_UPLOAD_BYTES = config.maxUploadMb * 1024 * 1024;

// extension -> allowed MIME types and magic-byte signatures
const TYPES = {
  '.pdf': { mimes: ['application/pdf'], magic: [[0x25, 0x50, 0x44, 0x46]] },
  '.doc': { mimes: ['application/msword'], magic: [[0xd0, 0xcf, 0x11, 0xe0]] },
  '.docx': {
    mimes: ['application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
    magic: [[0x50, 0x4b, 0x03, 0x04], [0x50, 0x4b, 0x05, 0x06], [0x50, 0x4b, 0x07, 0x08]],
  },
  '.jpg': { mimes: ['image/jpeg'], magic: [[0xff, 0xd8, 0xff]] },
  '.jpeg': { mimes: ['image/jpeg'], magic: [[0xff, 0xd8, 0xff]] },
  '.png': { mimes: ['image/png'], magic: [[0x89, 0x50, 0x4e, 0x47]] },
};

export const ACCEPTED_LABEL = 'PDF, Word (.doc, .docx), JPEG or PNG';

export class UploadError extends Error {
  constructor(message, fields) {
    super(message);
    this.statusCode = 400;
    this.fields = fields;
    this.isUploadError = true;
  }
}

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_UPLOAD_BYTES, files: 1, fields: 40, fieldSize: 20 * 1024, parts: 60 },
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname || '').toLowerCase();
    const type = TYPES[ext];
    if (!type) {
      return cb(new UploadError(`The CV must be a ${ACCEPTED_LABEL} file.`, { cv: `Upload a ${ACCEPTED_LABEL} file.` }));
    }
    if (!type.mimes.includes(file.mimetype)) {
      return cb(new UploadError('The uploaded file type does not match its extension.', { cv: 'The file type is not accepted. Upload a PDF, Word or image file.' }));
    }
    return cb(null, true);
  },
});

/** Verify the first bytes of the uploaded buffer match the claimed extension. */
export const hasValidSignature = (file) => {
  const ext = path.extname(file.originalname || '').toLowerCase();
  const type = TYPES[ext];
  if (!type || !file.buffer || file.buffer.length < 4) return false;
  return type.magic.some((sig) => sig.every((byte, i) => file.buffer[i] === byte));
};

/** Express middleware: parse the multipart body (single optional `cv` file) and map errors to 400 JSON. */
export const parseApplicationUpload = (req, res, next) => {
  upload.single('cv')(req, res, (err) => {
    if (!err) {
      if (req.file && !hasValidSignature(req.file)) {
        return res.status(400).json({
          success: false,
          error: {
            message: 'The uploaded file could not be verified as the type its name suggests.',
            fields: { cv: `Upload a genuine ${ACCEPTED_LABEL} file.` },
          },
        });
      }
      return next();
    }
    if (err.isUploadError) {
      return res.status(400).json({ success: false, error: { message: err.message, fields: err.fields } });
    }
    if (err instanceof multer.MulterError) {
      const map = {
        LIMIT_FILE_SIZE: [`The CV is larger than ${config.maxUploadMb} MB.`, { cv: `The file must be ${config.maxUploadMb} MB or smaller.` }],
        LIMIT_UNEXPECTED_FILE: ['Unexpected file field. Only a single CV file can be uploaded.', { cv: 'Upload a single CV file.' }],
        LIMIT_FILE_COUNT: ['Only one file can be uploaded.', { cv: 'Upload a single CV file.' }],
      };
      const [message, fields] = map[err.code] || ['The upload could not be processed.', undefined];
      return res.status(400).json({ success: false, error: { message, ...(fields && { fields }) } });
    }
    return next(err);
  });
};
