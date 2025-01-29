import mongoose from "mongoose";

export default function connectDatabase() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB connected");
    });

    connection.on("error", (err) => {
      console.log(
        "MongoDB connection error, please make sure db is up and running",
        err
      );
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong in connecting to db", error);
  }
}
