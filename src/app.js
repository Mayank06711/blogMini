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



//routes import 
import userRouter from "./routes/user.routes.js"
import blogRouter from "./routes/blog.routes.js"
import shareRouter from "./routes/share.routes.js"

//route declarations / api creation
app.use("/api/v1/user", userRouter) // here /user will act as prefix then whatever is the route of userRouter will be added e.g hhtps://localhost/9000/api/v1/user/regiter etc  
app.use("/api/v1/blog", blogRouter) // here /blog will act as prefix then '' '' '' '' '' '' '' '' '' 
app.use("/api/v1/share", shareRouter)// here /blog will act as prefix 

export { app }