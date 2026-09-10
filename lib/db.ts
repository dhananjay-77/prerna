import mongoose from 'mongoose';
const MONGODB_URI=process.env.MONGODB_URI;
declare global { var mongoosePromise: Promise<typeof mongoose>|undefined }
export async function connectDB(){if(!MONGODB_URI) throw new Error('MONGODB_URI is not configured');if(!global.mongoosePromise)global.mongoosePromise=mongoose.connect(MONGODB_URI);return global.mongoosePromise}
