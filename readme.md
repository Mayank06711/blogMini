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


##Multer vs. Cloudinary: A Comparison

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
