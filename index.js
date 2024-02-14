require('dotenv').config()
const express = require('express')
const cors=require('cors')
const router = require('./Router/routes')
require('./DB/connection')
const SRServer=express()


SRServer.use(cors())
SRServer.use(express.json())
SRServer.use(router)

const PORT=3000 || process.env.PORT
SRServer.listen(PORT,()=>{
    console.log("SR server connected to",PORT);
})

SRServer.get("/",(req,res)=>{
    res.status(200).send("SR Server sucessfully connected ")
})