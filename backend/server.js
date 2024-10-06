import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import userRoute from "./routes/userRoute.js";


//APP CONFIG
const app = express();
const port = process.env.PORT || 4000;
connectDB()

//ADD MIDDLEWARES
app.use(express.json());
app.use(cors());

//API ENDPOINTS
app.use("/api/user", userRoute);

app.get("/", (req,res)=>{
    res.send("API is working");
})


app.listen(port, ()=>{
    console.log(`Server Running on port ${port}`)
})