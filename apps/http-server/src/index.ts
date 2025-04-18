import express,{Request,Response} from "express"
import {Backend_URL} from "@repo/common/config"

const app = express()
const port = process.env.PORT || 3001
const url = Backend_URL
console.log(url);

app.get("/",async(req:Request,res:Response)=>{
    res.json({
        message:"You are Welcome"
    })
})

app.listen(port,()=>{
    console.log(`Server running on Port http://localhost:${port}`)
})