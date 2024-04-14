import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/apiError.js";
import { ApiResponse } from "../utils/apiResponse.js";
import { User } from "../models/user.model.js";
import { uploadOncloudinary, deleteFromCloudinary } from "../utils/cloudinaryFileUpload.js";


const generateAccessAndRefreshToken = async (userId) =>{
     try {
      const user = await User.findById(userId);
      const accessToken = await user.generateAccessToken();
      const refreshToken = await user.generateRefreshToken();
      user.refreshToken = refreshToken;
      await user.save({ validateBeforeSave: false })
      return {accessToken, refreshToken}
     } catch (error) {
          throw new ApiError(500,error, "Error while generating access and token")
     }
}

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


const loginUser = asyncHandler(async (req, res) => {
  // get data -> body
  // check if data is valid
  //find if user eixst or not
  // check password
  //generate access and refesh token
  // send response
    const {username, password,email } = req.body;

    if (!(username || email)) {
        throw new ApiError(401, "Invalid login details: check your email/username and password")
    }

    const user = await User.findOne(
      {
        $or: [{ username: username.toLowerCase() }, { email }],
      });

    if (!user) {
      throw new ApiError(404, "No user found with username or email id")
    }

    const isPasswordCorrect = await user.isPasswordCorrect(password); //user not User bcz this method  will work on instance of user User model not User model

    if (!isPasswordCorrect) {
        throw new ApiError(401,"Invalid user credentials")
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id)

    const loggedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    ) // select what we dont want to include in the response

    //  -- above {user} nd {loggedInUser} are different becuase above user will have empty refreshToken field {see user model} bcz we haven't specified refreshtoken earlier
    console.log(user, loggedInUser, "user ,  loggedInUser see diffrence"); 
    
    const options= {  // since by default cookies can be mmodified by anyone from frint-end or server so by doing this sookies can only be modified from server side
      httpOnly: true,
      secure:true,
     }

     return res.
     status(200). 
     cookie("refreshToken", refreshToken, options). // BCZ WE HAVE INSTALLED COOKIE-PARSER and we have inserted middleware cookie-parser() on app.cookie-parser() 
     cookie("accessToken",accessToken, options). // cookies are two way that can be useed with req and res both
     json(
       new ApiResponse(
         200, // status code
         { // data returned that we wanted
          user: loggedInUser,
          accessToken,
          refreshToken,
         },
         "User successfully logged in" // success message
       )
     )

})//DONE!



const logoutUser = asyncHandler(async (req, res) => {
   /* -------------STEPS TO LOG  OUT --------------------------------*/ 
          // step 1: ----  taking user datails from req.user that we have added while as middleware while logout request
          await  User.findByIdAndUpdate(
            req.user._id, 
            {
              $unset: {
                refreshToken: 1 //this remove field from databse
              }
            },
            {
              new: true, // to get updated new value with a refresh token as undefined otherqise we will get same value of refresh token
            }
          ) 
          //  -clear cookies
          const options = {
            httpOnly: true,
            secure: true,
          }
          
          const username = req.user.username;
          //console.log(req.user, "LOG OUT")
          return res
          .status(200)
          .clearCookie("refreshToken", options)
          .clearCookie("accessToken", options)
          .json(new ApiResponse(200, {username}, "User Logged Out"))

})//DONE!


export {
     registerUser,
     loginUser,
     logoutUser,
    //  refreshAccessTooken,
    //  changeCurrentPassword,
    //  getCurrentUser,
    //  updateUserDetails,
    //  updateUserAvatar, 
};
