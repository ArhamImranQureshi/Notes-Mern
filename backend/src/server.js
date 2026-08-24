import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
connectDB();
app.route("/api/notes",notesRoutes);


app.listen(process.env.PORT, () => console.log(`Server is running on port ${process.env.PORT}`));


// mongodb+srv://arhamgameslover_db_user:HsDjgiOPzl5KWULQ@cluster0.czgzujn.mongodb.net/?appName=Cluster0