import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors( {
    origin: process.env.CORS_ORIGIN,
    credentials:true
} ))     // used as middleware

app.use(express.json({limit: "16kb"})) //it sets the json data limit
app.use(express.urlencoded({extended: true, limit: "16kb"}))   // it encodeds the url data 
app.use(express.static("public")) // when i want to use some pdfs files or some folder in my server so will make an public folder 
app.use(cookieParser())

export { app }