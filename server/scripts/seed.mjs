// Seed the database with the vacancies that are live on the website.
//   npm run seed            insert any seed vacancies that are missing
//   npm run seed -- --force also reset existing seed vacancies to the seed content (applications are kept)
import { dbUri, mongoose } from '../src/db/index.js';
import { seedVacancies } from '../src/db/seed.js';

const overwrite = process.argv.includes('--force');
const result = await seedVacancies({ overwrite });
console.log(`Database: ${dbUri}`);
console.log(`Inserted: ${result.inserted.join(', ') || 'none'}`);
if (overwrite) console.log(`Reset:    ${result.updated.join(', ') || 'none'}`);
if (result.skipped.length) console.log(`Already present (use --force to reset): ${result.skipped.join(', ')}`);
await mongoose.disconnect();
