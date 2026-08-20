import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
const app = express();

app.route("/api/notes",notesRoutes);


app.listen(5000, () => console.log("Server is running on port 5000"));