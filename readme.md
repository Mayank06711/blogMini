### How to Set Up a Node.js Project on GitHub

1. **Open an Integrated Development Environment (IDE)**: Open any IDE like Visual Studio Code (VSCode).
   
2. **Drag and Drop Your Project Folder**: Drag and drop the folder you want to create your project into the IDE.
   
3. **Initialize NPM**: Open the integrated terminal and type `npm init` to initialize a new Node.js project. Follow the prompts to set up your project's package.json file.
   
4. **Create a README File**: Create a `README.md` file in your project directory and add any content you'd like. For example, you can simply type "Hey" or "Hi".
   
5. **Connect to GitHub**:
   - **a)** Initialize Git: Run `git init` in the terminal to initialize a new Git repository.
   - **b)** Stage Changes: Run `git add .` to stage all changes for commit.
   - **c)** Commit Changes: Run `git commit -m "Initial commit"` to commit the changes with a descriptive message.

6. **Create a Repository on GitHub**:
   - Go to GitHub and create a new repository.
   - Copy the last two commands provided on the repository creation page.
   - Paste these commands into your terminal to connect your local repository to the remote GitHub repository.

7. **Set Up Project Structure**:
   - Create a `public` folder to store public files like images, stylesheets, etc.
   - Inside the `public` folder, create a `temp` folder to store temporary data on the server.
   - Add a `.gitkeep` file inside the `public` folder to keep track of it in Git.

8. **Create a `.gitignore` File**:
   - Create a `.gitignore` file in your project directory to specify files and directories that Git should ignore.
   - You can generate a `.gitignore` file tailored for Node.js projects using websites like gitignore.io.

9. **Create Source Directory (src)**:
   - Create a `src` directory to store your source code files.
   - Inside the `src` directory, create required files like `app.js`, `constants.js`, etc.

10. **Install Nodemon and Dotenv**:
    - Run `npm install nodemon dotenv --save-dev` to install Nodemon and Dotenv as development dependencies.

Now, your Node.js project is set up on GitHub with a basic structure, ready for development.
### How to Connect MongoDB to Your Node.js Project

1. **Connect Your MongoDB Database**:
   - **a)** Create a new project on MongoDB.
   - **b)** Copy the connection string provided by MongoDB and save it in a `.env` file as `mongo_url`.
   - **c)** Now, we can connect to MongoDB in two ways:
     - Directly in `index.js` of the `src` folder.
     - Create another `index.js` in the `db` folder and export from there into `index.js` of `src`.

2. **Install Mongoose, Express, and dotenv**:
   - Install Mongoose, Express, and dotenv using npm:
     ```bash
     npm install mongoose express dotenv
     ```

3. **Set Up dotenv for Environment Variables**:
   - **a)** Install the dependencies:
     ```bash
     npm install dotenv
     ```
   - **b)** Import and configure dotenv at the very top of the first file that will be loaded, typically `index.js` of `src`:
     ```javascript
     require('dotenv').config();
     ```

4. **Connect to MongoDB in Your Node.js Project**:
   - **a)** Use `mongoose.connect` to connect to the database. Make sure to handle it within a `try-catch` block:
  
   - **b)** In the `index.js` of `src`, import the `connectDB` function:
   

Now, your Node.js project is connected to MongoDB and ready to use the database in your application, with environment variables managed using dotenv.

### How to Set Up Express Middleware in Your Node.js Project

1. **Install Express, Cors, and Cookie-Parser**:
   - Install Express, Cors, and Cookie-Parser using npm:
     ```bash
     npm install express cors cookie-parser
     ```

2. **Import Express and Middleware**:
   - Import Express and the required middleware at the top of your file:
     ```javascript
     import express from 'express';
     import cors from 'cors';
     import cookieParser from 'cookie-parser';
     ```

3. **Initialize Express App**:
   - Create an instance of the Express application:
     ```javascript
     const app = express();
     ```

4. **Use Cors Middleware**:
   - Use the Cors middleware to enable Cross-Origin Resource Sharing (CORS) with options for origin and credentials:
     ```javascript
     app.use(cors({
         origin: process.env.CORS_ORIGIN,
         credentials: true,
     }));
     ```

5. **Use Body Parser Middleware**:
   - Use the Express built-in JSON and URL-encoded body parser middleware to parse incoming requests with options for request size limit:
     ```javascript
     app.use(express.json({limit: "20kb"}));
     app.use(express.urlencoded({extended: true, limit:"20kb"}));
     ```

6. **Serve Static Files**:
   - Use the Express built-in static middleware to serve static files from the "public" directory:
     ```javascript
     app.use(express.static("public"));
     ```

7. **Use Cookie Parser Middleware**:
   - Use the Cookie-Parser middleware to parse cookies from the request headers:
     ```javascript
     app.use(cookieParser());
     ```

8. **Export the Express App**:
   - Export the Express app instance to be used in other files:
     ```javascript
     export { app };
     ```
     
Now, your Express middleware is set up in your Node.js project, allowing you to handle HTTP requests and responses efficiently.
### Blog Mini Overview Model

The Blog Mini Overview Model provides a concise summary of the content covered in the blog, offering readers a quick glance at the key points and topics discussed.

#### Contents:

1. **Introduction**: Brief introduction to the blog mini overview model.
2. **Key Features**: Highlight the main features and functionalities of the model.
3. **Usage**: Provide instructions on how to use the model effectively.
4. **Example**: Showcase an example of the model in action.
#### Usage:

To use the Blog Mini Overview Model, simply [click here](https://app.eraser.io/workspace/PmlS3lCWuWBjK3FlW5b9?origin=share) to access the content.


### mongoose-aggregate-paginate-v2

**Definition**: mongoose-aggregate-paginate-v2 is a plugin for Mongoose that enhances the `aggregate()` method with pagination support.

#### Installation

To install mongoose-aggregate-paginate-v2, use npm:

**Adding the plugin to a schema:**

const mongoose = require("mongoose");
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const mySchema = new mongoose.Schema({
  /* your schema definition */
});

mySchema.plugin(aggregatePaginate);

const myModel = mongoose.model("SampleModel", mySchema);
**Model.aggregatePaginate() Method:**
Returns a promise.
**Parameters:**
[aggregateQuery] {Object}: Aggregate query criteria.
[options] {Object}:
[sort] {Object | String}: Sort order.
[page] {Number}: Current page (Default: 1).
[limit] {Number}: Documents per page (Default: 10).
Promise fulfilled with object having properties:
docs {Array}: Array of documents.
totalDocs {Number}: Total number of documents.
limit {Number}: Limit used.
page {Number}: Current page number.

## Adding Hooks and Methods using Mongoose

Mongoose allows you to add hooks and methods to your schema, providing powerful functionality for managing data before saving it to the database and adding custom methods to your schema.

### Adding Hooks:

#### `pre("save")` Hook:

- **Definition**: The `pre("save")` hook is a middleware hook that executes just before saving a document.
- **Purpose**: It allows you to perform operations or modifications on the document before it is saved to the database.
- **Example Usage**:

```javascript
userSchema.pre("save", async function (next) {
    your code
    next();
});

```

markdown
Copy code
## Adding Hooks and Methods using Mongoose

Mongoose allows you to add hooks and methods to your schema, providing powerful functionality for managing data before saving it to the database and adding custom methods to your schema.

### Adding Hooks:

#### `pre("save")` Hook:

- **Definition**: The `pre("save")` hook is a middleware hook that executes just before saving a document.
- **Purpose**: It allows you to perform operations or modifications on the document before it is saved to the database.
- **Example Usage**:

```javascript
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});
```
**Adding Methods:**
User-defined Methods:
**Definition:** User-defined methods are custom functions added to the schema using the methods property.
**Purpose:** They provide additional functionality specific to your schema, such as password validation and token generation.
**Example Usage:**
```javascript
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

modelSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        { payload },
        process.env.ACCCES_TOKEN_SECRET_KEY,
        { expiresIn: desired expiry}
    );
};

modelSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { payload /data},
        process.env.REFRESH_TOKEN_SECRET_KEY,
        { expiresIn: expiray }
    );
};
```
In **summary**, hooks and methods in Mongoose provide essential functionalities such as data validation, encryption, and token generation, enhancing the capabilities of your schemas and models. They allow you to customize the behavior of your application's data layer according to your specific requirements


### Multer vs. Cloudinary: A Comparison

### Multer

**Definition**: Multer is a node.js middleware for handling multipart/form-data, primarily used for uploading files.

**Usage**:
- Multer adds a body object and a file or files object to the request object.
- The body object contains the values of the text fields of the form, while the file or files object contains the files uploaded via the form.
- Don't forget to include `enctype="multipart/form-data"` in your form.

Example Form:
```html
<form action="/profile" method="post" enctype="multipart/form-data">
  <input type="file" name="avatar" />
</form>
```
**Cloudinary**
Definition: Cloudinary is a cloud-based media management platform that offers a range of features, including image and video storage, manipulation, optimization, and delivery.

Usage:

Cloudinary provides a robust API and SDKs for uploading, transforming, and delivering media files.
It offers features such as image resizing, cropping, and compression, as well as video transcoding and streaming.
Cloudinary also provides integrations with various frameworks and platforms, making it easy to incorporate into your applications.


**Intension of multer and cloudinary in this project**
**Step1**
We will be taking file from user and hold that on local server temporarily.
**Step2**
We will be taking that file from local path then upload tht on cloudinary 
**NOTE**
 We could have uploaded file directly from multer to cloudinary without keeping it on local server but due to following advantages we do this.
**Advantages**
Security: Storing files locally before uploading them to a cloud service allows for additional security measures to be applied. For example, you can implement server-side validation and sanitization to ensure that only safe and authorized files are uploaded to Cloudinary.
Error Handling: By first storing files locally, you can perform error handling and validation checks before sending them to Cloudinary. This helps prevent the upload of invalid or corrupted files to the cloud service.
Data Integrity: Storing files locally provides an additional layer of data integrity. You can verify the integrity of the files on the local server before transferring them to Cloudinary, ensuring that the uploaded files are accurate and complete.
Backup: Keeping a local copy of uploaded files serves as a backup in case of any issues with Cloudinary or other cloud services. It provides an additional layer of redundancy to ensure that files are not lost in case of data loss or service interruptions.
Overall, uploading files indirectly from Multer to Cloudinary via a local server offers advantages in terms of security, error handling, data integrity, offline access, bandwidth optimization, and backup. It allows for greater control and flexibility in managing file uploads while leveraging the features and benefits of cloud-based storage and services like Cloudinary.

### Creating Login and Logout Controllers
Login and logout functionalities are crucial tasks for a backend developer. Here's how to create login and logout controllers:

**Requirements For Auth:**
JWT (JSON Web Tokens)
Cookie parser
** Login: **
Login involves granting access to users for authenticated services. After obtaining the user's email, username, and password, authentication needs to be added. Let's understand the concepts of access token and refresh token:

**Access Token:** A security token that grants a user permission to access certain resources or an API. It contains information about the user, permissions, groups, and timeframes. Access tokens are short-lived and generated during login to the server. If they expire early, the user has to log in again, which can be tidious. A possible solution is a refresh token.

**Refresh Token:** These tokens are long-lived and extend the lifespan of an access token. They're issued alongside access tokens, allowing additional access tokens to be granted when the live access token expires. They're usually securely stored on the authorization server. When an access token expires, the client-side can use the refresh token to request a new access token, avoiding the need for the user to log in again.

**Steps for Login:**

Obtain the user's username, email, and password.
Generate access and refresh tokens.and save refresh token in user document on databse 
Pass the tokens to the client in a cookie with the options httpOnly: true and secure: true, ensuring that the client-side cannot modify these tokens.
Logout:
Logging out is different from logging in because you cannot prompt the user to enter their credentials again for logout. Instead, middleware is used to verify the user's access token.

**Steps for Logout:**

Use middleware to verify the user's access token.
Decode the access token using JWT verify method and extract user information.
Find the user in the database using the extracted user information.
If the user exists, add the user object to the request and clearcookies and pass the next flag to the logout controller.
This covers the use of refresh and access tokens in login and logout, which is one of the most important aspects of authentication and user management in backend development.
**NOTE** We have added our cookie-parser middleware in "/" route that is why we can use cookie things here
**Middleware**
Example
```javascript
 const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ","");
        
        if (!token) {
            throw new ApiError(401,"Invalid Access Token")
        }
        
        const decodeToken = jwt.verify(token, process.env.ACCCES_TOKEN_SECRET_KEY)
    
       const user =  await User.findById(decodeToken?._id).select(
            "-password -refreshToken"
        ) // MonoDB method used here
    
        if(!user) {
            throw new ApiError(401,"Inavalid AccesToken")
        }
    
        req.user = user; // add user object in request
        next();
    } catch (error) {
        throw new ApiError(401, error?.message, "Invalid Access Token")
    }
})
// below is how it should be passed 
router.route("/logout").post(verifyJWT, logoutUser)
```
### RESTFull API's

RESTful principles are a set of guidelines for designing web APIs that are consistent, predictable, and easy to understand. These principles help ensure that your API is well-structured and behaves in a standard way, making it easier for developers to work with and integrate into their applications. Here are some key principles of RESTful API design:

**Use of HTTP Methods:** RESTful APIs make use of HTTP methods (GET, POST, PUT, DELETE) to perform CRUD (Create, Read, Update, Delete) operations on resources. Each HTTP method corresponds to a specific action on a resource.

**Resource-Based URL Structure:** URLs should represent resources, and the HTTP methods should indicate the action to be performed on those resources. For example:

/blogs for a collection of blog posts.
/blogs/{id} for a specific blog post identified by its ID.

**Use of HTTP Status Codes:** HTTP status codes are used to indicate the success or failure of an API request. For example:

200 OK for successful responses.
404 Not Found for resources that cannot be found.
400 Bad Request for malformed requests.
**Statelessness:** Each request from a client to the server should contain all the information necessary to process the request. The server should not rely on any client state being stored on the server between requests.

**Use of JSON as the Data Format:** JSON (JavaScript Object Notation) is the preferred data format for RESTful APIs due to its simplicity, readability, and widespread support.

**Versioning:** APIs should be versioned to prevent breaking changes for existing clients when introducing new features or changes to the API.

### How to aggregation pipelines in mogoDB
Before moving further into how to add aggregation one must know what is aggregation what does it return how it works and why to use it ? 
So lets start with what is aggregation : Aggregation is a process to perform analysis on incoming data and modifiy it using pipeline. aggregation operation can include grouing sorting filtering and mathematics Aggregation operations process multiple documents and return computed results 
and to perform aggregation operation you can use aggregation pipelines which are nothing but chunks of codes written to do some definite task on incomig document data and pass it to next stage , hence aggregation operations contains different stages called as pipelines.An aggregation pipeline consists of one or more stages that process documents:
Each stage performs an operation on the input documents. For example, a stage can filter documents, group documents, and calculate values.
The documents that are output from a stage are passed to the next stage.
adding pipelines is more simple than u think let say u have movie as schema
```javascript
movie.agregate([{},{},{}])
```
here aggregate is used on movie instance of Movie model 
and aggregate always take array as input ans with in the array we write our pipelines 
most common practice on writing aggregation pipelines is that first stage is kep for $match operation which is used to filter data with query passed into match, it looks into movie model of database for given query and if false it returns from there further we perfrom $lookup to perfomr left outer join  operation between two models of database lets say movie and priceOfMovie so it To perform an equality match between a field from the input documents movies with a field from the documents of the "joined" collection (priceofmovies), the $lookup stage has this **syntax as**
```javascript
$lookup:{
from: <collection to join> here  priceofmovies,
 localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
}
```
further if you want to write subpipeline you can add by simply writing 
```javascript
$lookup:{
from: <collection to join> here  priceofmovies,
 localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>,
      pipeline:{
         your code 
       }
}
```
passing output we can use 
```javascript 
$project
```
 which helps to determine which fields to pass to next stage or as final output .**NOTE** aggregate return an array of object so be carefull about your usecase
 
**Left outer join**
A left outer join, often abbreviated as just "left join," is a type of database join operation that retrieves all records from the left table (or collection) and the matching records from the right table (or collection). If there is no matching record in the right table, NULL values are returned for the columns from the right table.

In the context of MongoDB's $lookup operator:

The "left" collection refers to the collection you are running the $lookup operation on.
The "right" collection is the collection you are joining with using the $lookup operator.
For example, consider two collections: orders and customers. Each order document in the orders collection has a field called customerId, which references the _id field of the corresponding customer in the customers collection.

If you perform a left outer join between the orders and customers collections using the $lookup operator:

All documents from the orders collection will be returned.
For each document in the orders collection, MongoDB will look up the corresponding customer document in the customers collection based on the customerId field.
If a matching customer document is found, it will be included in the result as an embedded document.
If no matching customer document is found, the corresponding field in the result will be null.

### Agregate AggregatePaginate
In MongoDB, both aggregate and aggregatePaginate are methods used for performing aggregation operations on a collection. However, they serve slightly different purposes and have different usage patterns.
**Aggregate**: This is a built-in method provided by MongoDB's native driver. It allows you to perform aggregation operations on a collection by constructing an aggregation pipeline. The pipeline consists of multiple stages, each of which performs a specific operation on the input documents. These stages can include operations like filtering, grouping, sorting, projecting, and more.

```javascript
Copy code
const result = await Model.aggregate([
  { $match: { ... }},
  { $group: { ... }},
  { $sort: { ... }},
  // Other stages...
]);
```
**Pros**: Offers full flexibility to construct complex aggregation pipelines tailored to your specific requirements.

**Cons**: Pagination functionality is not built-in, so you need to implement pagination logic manually if required.
**AggregatePaginate**: This method is provided by third-party libraries like mongoose-aggregate-paginate-v2. It extends the functionality of the native aggregate method by adding pagination support to the aggregation results. This is particularly useful when you have large result sets and need to paginate through them.

```javascript
Copy code
const result = await Model.aggregatePaginate([
  { $match: { ... }},
  { $group: { ... }},
  { $sort: { ... }},
  // Other stages...
]);
```
**Pros**: Simplifies pagination implementation by providing built-in support for paginating aggregation results.

**Cons**: Limited to the functionality provided by the library, may not support all aggregation pipeline stages or options available in the native aggregate method.

**My Advice**
As per my thinkig using aggregae is good at initial stage of learning because we learn how to write pagination and do different things with our data **mention in pros** but once you feel confortable in this you should move to aggregatepaginate as it has extended features. 

### Explaining Share Model 
Lets first see how does it look like (MongoDB model)
```javascript
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const shareSchema = new Schema(
  {
    sender: {
      // one who is sending blog
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    receiver: {
      //to whome you send blog : reciever
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
    creator: {
      // whose blog is being shared array bcz one user might send many blogs of diff author to diff sers
      type: [Schema.Types.ObjectId],
      ref: "User",
    },
  },
  { timestamps: true }
);

shareSchema.plugin(mongooseAggregatePaginate);
export const Share = mongoose.model("Share", shareSchema);

```
So above you saw model now lets break it down                                           
Creator of any blog will be same no matter how many times same blog is sent or recieved so but different blogs would have different or same creator, therefore when a sender sends a blog, sender can send blog of same or different creator and also sender can send either one or more than one receiver that is why giving priority to the sender this model has sender as string but creator and reciver as array of string.
Now what are possible operation that we can do on this model?
```javascriptimport
{ Share } from "../models/share.model";
import { User } from "../models/user.model";
import { Blog } from "../models/blog.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";


const shareOneBlog = asyncHandler(async (req, res) =>{ // extract reciverId from params, sender from res.user._id and  title or other from body 

}) 


const shareManyBlog = asyncHandler(async (req, res) =>{// extract reciverId from params, sender from res.user._id and  title or other from body but find all blogs and share all

}) 


const undoBlogShares = asyncHandler(async (req, res)=>{ // simply delete blog share model

})

const undoOneBlogShares = asyncHandler(async (req, res)=>{

})

export {
    shareOneBlog,
    shareManyBlog,
    undoBlogShares,
    undoOneBlogShares
}

```
I hope I was able to make it clear.

### Client Side Integration 
Here I will discuss about how to connect server with client side and take data from server database and serve it to client.So lets tighten our seat belts to get on new journey which is going to be a roller coaster of confussion and hardules.
To integrate your server with the client-side using React and Axios, follow these steps:
Create a folder in your main folder and name it as client or frontend or whatever you want and then go to that folder and open integrated terminal and run following commands
```javascript
    npm create vite@latest .
```
Then follow the steps that your get while creating your vite app like give name of your project, choose react library and javascript and then enter, this will create your project only so now you will have two option as
```javascript
npm i 
npm run dev
```
run these command in terminal in sequence.
Click on localhost:address and now you will have a screen with vite+react project.
Clear all the unnecessary code that you do not want in your projcect. This is all set up for client side project now time to move on.
Create folder in src like components, utils etc to start writing your react code.To style your componets/project you can use any of the styling method like using CSS or SASS or latest tailwind **Used in this project**
**Checking connection between server and client to get confidence is our top most priority so now you can use either fetch or axios (I prefer axios for this).
```javascript
npm i axios
```
Now after installing axios what you need first is to create folder name api inside src and then inside that folder you should create axios.js file something like this
```javascript
import axios from "axios"


export default axios.create({
  baseURL: "http://localhost:your localhost address
});
```
Now for testing purpose create any reqeust from user to server make sure while testing only request to those url which are not authenticated, let say you have **created a axios get request** 
so you might face an error realted to CORS(Cross Origin Resource Sharing) **Discussed Above** in CORS explanation,so back to topic since you got an error related to CORS you can now do two things:
1 **Proxy setting** In your frontend side go to vite config file and set proxy or go to server side and where whitelist your client localhost address, whereever you have applied CORS middleware.
This will fix the error and now you will be getting reponse from server.
Till now you will get confident that your both sides aare working fine and with this confident you can start writing your React code and crate as componets to render through: ```javascript <App /> ```
My advice is to create authenticated components first so that you can keep checking you incoming data and work with that data as needed.
What generally I do is that I create a Login component first now if you are following this repo code below is the Login component but of course sice its first component it is not complete yet but good enough for you to learn how to write Login component using React and Tailwind
```javascript
import { useState, useEffect, useContext, useRef } from "react";
import axios from "../../api/axios.js"  
const LOGIN_URL = "/user/login";
import AuthContext from "../../context/authContext";



const Login = () => {
  /*----------------------- Declaring state Variables -------------------------*/
  
  const {setAuth} = useContext(AuthContext)
  const [user, setUser] = useState() /// i will be using this after creating navigation button of login it will turn off login page once it is successfully loggedin
  
        //declaring reference to err and user input fields
  const userRef = useRef()
  const errRef = useRef()

         // for displaying false and success messages 
  const [LoginResult, setLoginResult] = useState(false)
  
         // for error messages and success messages
  const [errMgs, setErrMsg] = useState("") 
 
               // State for form input values
  const [credentials, setCredentials] = useState({
    email: "", // user email or username
    password: "", // password 
    username:"" // username 
  });

        // to focus on email/username inputs when it render first time , it does not have any dependencies so it will be work everytime this component renders
   useEffect(()=>{  
    if (!LoginResult) {  //userRef.current is undefined if our userRef.current might not be available at that moment(loginREsult = true). you call userRef.current.focus() in the useEffect hook, it throws an error because userRef.current is undefined. To fix this issue, you should conditionally call focus() on userRef.current only when LoginResult is false
        userRef.current.focus();
      }
   }, [LoginResult]);
    
       // Clear error message when credentials change
  useEffect(()=>{
      setErrMsg("")
  }, [credentials])


  //Function to handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // Update credentials based on input field name
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // funtion to handle submit 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      // Check if the entered value is a valid email address
      const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(credentials.email);
      
      // If it's a valid email address, set it to the 'email' field; otherwise, set it to the 'username' field
      const loginData = isValidEmail
      ? { email: credentials.email, password: credentials.password }
      : { username: credentials.email, password: credentials.password };

      console.log(credentials, "im logging in")


      // Making a POST request to the LOGIN_URL with loginData as the request body
      const response = await axios.post(LOGIN_URL, 
      loginData,
      {
         // Setting headers for the request
       headers: { "Content-Type": "application/json" },
          // Enabling credentials to be sent with the request (e.g., cookies)
       withCredentials: true,
      });

      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response))
      console.log(credentials, errMgs, "credentials in login");
      const accessToken = response?.data?.accessToken
      const refreshToken = response?.data?.refreshToken
      const loggedInUser = response?.data?.username 
           // Storing user authentication data inside the auth object
      setAuth({ loggedInUser, refreshToken, accessToken });

         // Resetting form input fields after successful login
      setCredentials({ emailEnteredInForm: "", password: "" });

        // Setting LoginResult to true to display the login success message
      setLoginResult(true);

    } catch (error) {
        if(!error?.response){
          setErrMsg("No server reponse")
        }
        else if(error.response?.status === 400){
          setErrMsg("Invalid email or password")
        }
        else if(error.response?.status === 401){
            setErrMsg("Unauthorized")
        }
        else{
        setErrMsg("Login failed")
        }
        errRef.current.focus()
    }
  };  


  return (
    <>
    {
    LoginResult ? (
        <section>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Login Successfully
        </h2>
        <p className="mt-10 text-center text-sm text-gray-500">
         Click!
          <a
            href="#" // TODO: home url
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
          Return Home
          </a>
        </p>
        </section>
    ):(
       <section className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <p
            ref={errRef}
            className={`${
                errMgs ? "block" : "hidden" // Show the paragraph if errMgs exists, otherwise hide it
            } text-red-500 text-sm font-bold leading-3 mb-2 mt-2`}
            aria-live = "assertive"
        >
        {errMgs}    
       </p>
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-14 w-auto"
          src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"
          alt="BlogMini"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Welcome back! Please Login
        </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          action="#"
          onSubmit={handleSubmit}
        >
          <div>
          <label htmlFor="emailEnteredInForm" className="block text-sm font-medium leading-6 text-gray-800">Email/Username</label>
            <div className="mt-2">
              <input
                type="text"
                id="emailEnteredInForm"
                name="email"
                value={credentials.email}
                autoComplete="off"
                ref={userRef}
                onChange={handleChange}
                placeholder="Email/username"
                required
                className="block w-full rounded-md border-1 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        
          <div>
            <div className="flex items-center justify-between">
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div className="text-sm">
                <a
                  href="#" // send him to link of forget password 
                  className="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input 
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                placeholder="Password"
                minLength={8}
                required
                className="block w-full rounded-md border-0 py-2 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Need an account?
          <a
            href="#" // TODO: add regiter url
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
          Registor
          </a>
        </p>
      </div>
       </section>
    )}
    </>
  );
};


export default Login;
```
now you can get explanation of this component using Chatgpt but below are important definitions which you might not understand using chatGpt.

**useEffect**:

Every time your component renders, React will update the screen and then run the code inside useEffect. In other words, **useEffect “delays” a piece of code from running until that render is reflected on the screen**. This can be useful for performing side effects in function components. For example, you might use useEffect to fetch data from an API, subscribe to a WebSocket, or set up event listeners. By default, useEffect runs after every render, including the initial render. However, you can control when it runs by providing dependencies as the second argument to useEffect. If the dependencies change between renders, useEffect will run again. If you don't specify any dependencies, useEffect will run after every render.

**useRef**: When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.Call the useRef Hook and pass the initial value that you want to reference as the only argument useRef returns an object like this:

{
current:value you pass to your ref
}
It’s like a secret pocket of your component that React doesn’t track. useState: It is most common and simle hook use to set or reset any specific value/targeted-value of a component.React uses this hook to render change only on that target element without re-rendering of page.

 **useCallback**:
 It is a hook used for memoization purpose, it optimises the performance react code. It takes two parameters as input one is a function value that you want to cache and other is array o dependencies:These are often paramters of function used by useCallback.It can be used for: Skipping re-rendering of components Updating state from a memoized callback.
**Authentication**:
```javacript
import { createContext ,useState} from "react";

const default AuthContext  = createContext({});
import AuthContext from "./authContext";

export  const AuthProvider = ({ children })=>{
    const [auth, setAuth] = useState({});
    // const [user, setUser] = useState(null); we can pass it as auth and authprovider user, setUser
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

```

**createContext**: This function is used to create a context object in React. 
Context provides a way to pass data through the component tree without having to pass props down 
manually at every level.

**useState**: This is a React Hook that allows functional components to manage state. 
It returns a stateful value and a function to update that value.

**AuthContext**: This is a context object created using createContext(). 
It will be used to share authentication-related data (such as user authentication status, user information, etc.) 
throughout the component tree.

**AuthProvider**: This is a custom component that serves as the provider for the AuthContext.
 It wraps around other components and provides them with access to the authentication data stored in the
  context. It uses the useState hook to manage the authentication state.

**children**: This is a special prop in React that represents the child components nested inside 
the AuthProvider. By passing children as a prop, any component wrapped in the AuthProvider will 
have access to the authentication context.


**auth**: This state variable holds authentication-related data, such as user authentication status, 
user information, etc.

**setAuth**: This function is used to update the auth state. 
It is provided by the useState hook and allows components to modify the authentication data stored in 
the context.

**Thinking about UI declaratively**
1>Identify your component’s different visual states. 2>Determine what triggers those state changes. 3>Represent the state in memory using useState. 4>Remove any non-essential state variables. 5>Connect the event handlers to set the state.
