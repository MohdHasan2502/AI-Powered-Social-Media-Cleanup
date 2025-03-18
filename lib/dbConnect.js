import mongoose, { connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-media-app-reddit";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI in your .env file");
}

let cached = global.mongoose || { connection: null, promise: null };

export const dbConnect = async () => {
  if (cached.connection) return cached.connection;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  cached.connection = await cached.promise;
  return cached.connection;
};
