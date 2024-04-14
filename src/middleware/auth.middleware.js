import  jwt  from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import  {ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

export const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        
        if (!token) {
            throw new ApiError(401,"Invalid Access Token")
        }
        
        const decodeToken = jwt.verify(token, process.env.ACCCES_TOKEN_SECRET_KEY)
    
       const user =  await User.findById(decodeToken?._id).select(
            "-password -refreshToken"
        )
    
        if(!user) {
            throw new ApiError(401,"Inavalid AccesToken")
        }
    
        req.user = user; // add user object in request
        next();
    } catch (error) {
        throw new ApiError(401, error?.message, "Invalid Access Token")
    }
})