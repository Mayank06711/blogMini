import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware.js";

import {
    getBlogComments, 
    addComment, 
    updateComment,
    deleteComment
} from "../controller/comment.controller.js"

const router =  Router();

router.use(verifyJWT)// Apply verifyJWT middleware to all routes in this file

router.route("/") // taking blog id from body
.post(addComment)

router.route("/:commentId")
.get(getBlogComments)
.delete(deleteComment)
.patch(updateComment)


export default router;