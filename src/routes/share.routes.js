import { Router } from "express";
import { verifyJWT } from "../middleware/auth.middleware";
import {
    shareManyBlog,
    shareOneBlog,
    undoOneBlogShares,
    undoBlogShares
} from "../controller/share.controller.js"
const router = Router();

router.use(verifyJWT);

router.route("/:receiverId") // we will be sending blog to the username from given username or receiver id and blog title or blogid 
.post(shareOneBlog)

router.route("/share-m/:receiverId") // we will be sending blog of creator to the receiver id and , blog is extracted title or creatorid from body
.post(shareManyBlog)

router.route("/undo/:receiverId")
.post(undoBlogShares)
.post(undoOneBlogShares)

export default router 