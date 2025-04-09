import mongoose, { ConnectOptions } from "mongoose";

let initialized = false;

export const connect = async () => {
  mongoose.set("strictQuery", true);
  if (initialized) {
    console.log("Already connected to MongoDB");
    return;
  }
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI as string, {
      dbName: "next-blog",
      useNewUrlParser: true,
      useUnifiedTopology: true
    } as ConnectOptions);
    console.log("Connected to MongoDB");
    initialized = true;
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error);
  }
}