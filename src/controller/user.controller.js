import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { uploadOncloudinary, deleteFromCloudinary } from "../utils/cloudinaryFileUpload.js";
const registerUser = asyncHandler(async (req, res) => {
  //steps1 get user information from client
  //steps2 validate user information
  //step3 check if user is already registered email or username
  //step4 check for avatar
  //step5 upload to cloudinary server and check
  //steps6 create user object document on db using dn create
  //step7 remove user refresh token and pass from reposne
  //steps8 check if user not created
  //steps9 return response

                      //step1
  const { username, email, password, fullName, role } = req.body;
  console.log(username, email, password, fullName, role);

              // Step2
  if (
    [username, email, password, fullName, role].some(
      (value) => value?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required fields");
  }

  // Step3
  const existedUser = await User.findOne({
      $or: [{ email}, {username}]
  });
 console.log(existedUser)
  if (existedUser) {
    throw new ApiError(409, "Email or username already exists");
  }

  // Step4
  const avatarLocalPath = req.files?.avatar[0].path; // bcz of multer storage 2ns cd originalfilename and  name:"avatar" bcs in register route name is this
  if (!avatarLocalPath) { // sicne our user schema don't have avatr as required true for avatr
    throw new ApiError(400, "Avatar is required");
  }
           // Step5 
 const avatarUploaded = await uploadOncloudinary(avatarLocalPath)

 if (!avatarUploaded) {
    throw new ApiError(400, "Avatar is required");
 }

         // step6
 const user = await User.create(
    {
        username: username.toLowerCase(),
        email, // this is same as others
        password: password,
        fullName: fullName,
        role: role,
        avatar: avatarUploaded.url,
    })

   const createUser = await User.findById(user._id).select(
    "-password -refreshToken"
   ) // select what we dont want to include in the response
   
   if(!createUser) {
    const avatarUrl = avatarUploaded.url  // extract  url 

    const urlArrayOfAvatar = avatarUrl.split("/") // split url into array from every / point

    const avatarFromUrl = urlArrayOfAvatar[urlArrayOfAvatar.length - 1] // extracting avatar name with format 

    const avatarName = avatarFromUrl.split(".")[0] // only name of avatar without any format
    
    const avatrDeleted = await deleteFromCloudinary(avatarName)
    //console.log(avatrDeleted,"avatar deleted")
    throw new ApiError(500, "Something went wrong while registring user: try again later");
   }

  return res
   .status(201)
   .json(new ApiResponse(201, createUser, "User registerd successfully"))
});//DONE!

export {
     registerUser,
    //  loginUser,
    //  logoutUser,
    //  refreshAccessTooken,
    //  changeCurrentPassword,
    //  getCurrentUser,
    //  updateUserDetails,
    //  updateUserAvatar, 
};
