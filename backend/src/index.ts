import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
  console.log("Connected to MongoDB");
});

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.json("Hello World!");
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
