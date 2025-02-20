import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("Please provide mongodb uri in env file");
}

let cachedConnection = global.mongoose;

if (!cachedConnection) {
  cachedConnection = global.mongoose = { conn: null, promise: null };
}

export default async function connectDB() {
  if (cachedConnection.conn) {
    console.log("db cached so returned");
    return cachedConnection.conn;
  }

  if (!cachedConnection.promise) {
    const options = {
      bufferCommands: true,
      maxPoolSize: 4,
    };

    cachedConnection.promise = mongoose
      .connect(MONGO_URI, options)
      .then(() => mongoose.connection);
  }

  try {
    cachedConnection.conn = await cachedConnection.promise;
  } catch (error) {
    cachedConnection.promise = null;
    throw error;
  }

  return cachedConnection.conn;
}
