import mongoose from "mongoose";

let isConnected = false;

export async function dbConnect() {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongoose is already connected");

    return;
  }

  try {
    const db = await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "vibezone",
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    isConnected = db.connections[0].readyState;
    console.log("Mongoose is connected");
  } catch (error) {
    console.log(error);
  }
}
