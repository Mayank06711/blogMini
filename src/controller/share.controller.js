import { Share } from "../models/share.model";
import { User } from "../models/user.model";
import { Blog } from "../models/blog.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const shareOneBlog = asyncHandler(async (req, res) =>{

}) 


const shareManyBlog = asyncHandler(async (req, res) =>{

}) 


const undoBlogShares = asyncHandler(async (req, res)=>{

})

const undoOneBlogShares = asyncHandler(async (req, res)=>{

})

export {
    shareOneBlog,
    shareManyBlog,
    undoBlogShares,
    undoOneBlogShares
}