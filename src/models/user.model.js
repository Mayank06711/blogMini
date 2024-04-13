import mongoose , {Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true // this should be true for those field which are going to be used for searching
    },
    email:{
        type:String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 8,
        trim: true,
    },
    fullName:{
        type: String,
        required: true,
        trim: true,
        index: true 
    },
    profilePicture:{
        type: String,//to save url of profile picture
        required: false,
    },
    bio:{
        type: String,
        required: false,
    },
    role:{
        type:String,
        required: true,
        trim: true,
        default: "user"//Defines the user's role or permissions within the blog system. For example, "user", "admin", "editor", etc.
    },

},{timestamps: true});


export const User = mongoose.model("User", userSchema);