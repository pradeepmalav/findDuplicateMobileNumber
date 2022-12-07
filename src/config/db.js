
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config({ path: '.env' });

const MONGO_URL = process.env.url || "mongodb://localhost:27017/db"

export const dbConnect = async () => {
    mongoose.connect(
    MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      
    }
  )
}
