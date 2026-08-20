import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import connectDB from "./config/db.js";
const app = express();
connectDB();
app.route("/api/notes",notesRoutes);


app.listen(5000, () => console.log("Server is running on port 5000"));


// mongodb+srv://arhamgameslover_db_user:HsDjgiOPzl5KWULQ@cluster0.czgzujn.mongodb.net/?appName=Cluster0