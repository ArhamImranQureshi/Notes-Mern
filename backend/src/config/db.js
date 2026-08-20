import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        await mongoose.connect("mongodb+srv://arhamgameslover_db_user:HsDjgiOPzl5KWULQ@cluster0.czgzujn.mongodb.net/?appName=Cluster0");
        console.log("MongoDB connected successfully");
    }catch(error){
        console.log(error);
        process.exit(1);
    }
}

export default connectDB;