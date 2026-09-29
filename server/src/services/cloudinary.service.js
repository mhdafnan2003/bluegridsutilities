import { v2 as cloudinary } from 'cloudinary';
import { config } from '../config/index.js';

/**
 * CV storage on Cloudinary.
 * - Configured (CLOUDINARY_CLOUD_NAME/API_KEY/API_SECRET set) -> CVs are uploaded there; MongoDB
 *   only stores the filename, size, content type and the Cloudinary reference.
 * - Not configured -> careers.controller falls back to storing the file's bytes directly in
 *   MongoDB, exactly as before. Nothing here is required for the app to work in development.
 *
 * CVs are personal data, so they are uploaded as `type: 'authenticated'`: Cloudinary will not
 * serve them from a plain public URL. Downloads (admin only) go through a short-lived signed URL
 * generated on demand in getSignedCvUrl, fetched server-side and streamed to the dashboard.
 */

export const isCloudinaryConfigured = () =>
  Boolean(config.cloudinaryCloudName && config.cloudinaryApiKey && config.cloudinaryApiSecret);

if (isCloudinaryConfigured()) {
  cloudinary.config({
    cloud_name: config.cloudinaryCloudName,
    api_key: config.cloudinaryApiKey,
    api_secret: config.cloudinaryApiSecret,
    secure: true,
  });
}

const RESOURCE_TYPE = 'raw'; // PDFs, Word docs, images all go through 'raw' so filenames/extensions are kept as-is

/** Upload a CV buffer. Returns { publicId, resourceType } to store alongside the application. */
export const uploadCv = (buffer, { applicationId, filename }) =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        resource_type: RESOURCE_TYPE,
        type: 'authenticated',
        folder: 'bluegrid/cvs',
        public_id: `${applicationId}-${filename}`.replace(/\.[^.]+$/, ''), // keep the name for reference; Cloudinary adds its own extension handling for 'raw'
        use_filename: false,
        overwrite: false,
      },
      (err, result) => (err ? reject(err) : resolve({ publicId: result.public_id, resourceType: result.resource_type })),
    );
    stream.end(buffer);
  });

/** A short-lived signed URL for one authenticated download (default: 5 minutes). */
export const getSignedCvUrl = (publicId, resourceType = RESOURCE_TYPE, expiresInSeconds = 300) =>
  cloudinary.utils.private_download_url(publicId, undefined, {
    resource_type: resourceType,
    type: 'authenticated',
    expires_at: Math.floor(Date.now() / 1000) + expiresInSeconds,
  });

export const deleteCv = (publicId, resourceType = RESOURCE_TYPE) =>
  cloudinary.uploader.destroy(publicId, { resource_type: resourceType, type: 'authenticated' }).catch((err) => {
    console.warn(`[Cloudinary] Failed to delete ${publicId}:`, err.message);
  });
