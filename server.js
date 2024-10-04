import express from "express";
import cors from "cors";
import "dotenv/config";

//APP CONFIG
const app = express();
const port = process.env.PORT || 4000;

//ADD MIDDLEWARES
app.use(express.json());
app.use(cors());

//API ENDPOINTS

app.get("/", (req,res)=>{
    res.send("API is working");
})


app.listen(port, ()=>{
    console.log(`Server Running on port ${port}`)
})