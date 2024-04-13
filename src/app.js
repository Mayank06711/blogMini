import express from 'express';//Fast, unopinionated, minimalist web framework for Node.js. Robust routing .Focus on high performance. Super-high test coverage. HTTP helpers (redirection, caching, etc)
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit: "20kb"}));
app.use(express.urlencoded({extended: true, limit:"20kb"}))
app.use(express.static("public"))
app.use(cookieParser())


export { app }