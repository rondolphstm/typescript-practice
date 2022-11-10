import express from "express";
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())

app.listen(5005,()=>[
    console.log("http://localhost:5005")
])

