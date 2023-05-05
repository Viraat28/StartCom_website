import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'
import ChatRoute from './Routes/ChatRoute.js'
import MessageRoute from './Routes/MessageRoute.js'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express';
import morgan  from 'morgan'
import fs from 'fs'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { createClient } from "redis";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();
const options={
    definition:{
        openapi:'3.0.0',
        info:{
            title:'StartCom',
            version:'1.0.0'
        },
        servers:[
            {
                url:'http://localhost:5000/' 
            }
        ]
    },
    
    apis:['./index.js','./Routes/UserRoute.js','./Routes/AuthRoute.js','./Routes/ChatRoute.js','./Routes/PostRoute.js','./Routes/MessageRoute.js']
}

const swaggerSpec=swaggerJSDoc(options)
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))

/**
 * @swagger
 * /user:
 *  get:
 *      summary: Get all users
 *      description: Returns a list of all users
 *      tags: [Users]
 *      responses:
 *          200:
 *              description: A list of users
 *          500:
 *              description: Error
 * 
 */


/**
 * @swagger
 * /user/{id}:
 *  get:
 *      summary: Get a user by ID
 *      description: Returns a single user by ID
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: ID of the user
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: Returned User details
 *          404:
 *              description: No such user
 *          500:
 *              description: Error
 * 
 */




/**
 * @swagger
 * /user/{id}:
 *  delete:
 *      summary: Delete a user by ID
 *      description: Deletes a single user by ID
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: ID of the user
 *            required: true
 *            schema:
 *              type: string
 *      responses:
 *          200:
 *              description: User Deleted
 *          500:
 *              description: Error
 * 
 */


/**
 * @swagger
 * /user/{id}/follow:
 *  put:
 *      summary: Follow a user by ID
 *      description: Follows a user by ID
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: ID of the user to follow
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *      responses:
 *          200:
 *              description: User Followed
 *          403:
 *              description: Action Forbidden
 *          500:
 *              description: Error
 * 
 */


/**
 * @swagger
 * /user/{id}/unfollow:
 *  put:
 *      summary: Unfollow a user by ID
 *      description: Unfollows a user by ID
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            description: ID of the user to unfollow
 *            required: true
 *            schema:
 *              type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                _id:
 *                  type: string
 *      responses:
 *          200:
 *              description: Unfollowed Successfully
 *          403:
 *              description: Action Forbidden
 *          500:
 *              description: Error
 * 
 */

/**
 * @swagger
 * /auth/register:
 *  post:
 *    summary: Register a new user
 *    description: Register a new user with the provided credentials
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                type: string
 *              password:
 *                type: string
 *              username:
 *                type: string
 *              firstname:
 *                type: string
 *              lastname:
 *                type: string
 *    responses:
 *      '200':
 *        description: A successful response
 *      '400':
 *        description: Invalid request payload
 *      '500':
 *        description: User already exists
 */
/**
 * @swagger
 * /auth/login:
 *  post:
 *    summary: Login a user
 *    description: Login an existing user with the provided credentials
 *    tags: [Authentication]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      '200':
 *        description: A successful response with the user token
 *      '400':
 *        description: Invalid email or password
 */

/**
 * @swagger
 * /chat:
 *   post:
 *     summary: Create a new chat
 *     description: Create a new chat between two users
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstUser:
 *                 type: string
 *               secondUser:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Chat created successfully
 *       '400':
 *         description: Invalid request payload
 */



/**
 * @swagger
 * /chat/{userId}:
 *   get:
 *     summary: Get chats for a user
 *     description: Get all the chats for the specified user
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: userId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user to get chats for
 *     responses:
 *       '200':
 *         description: A list of chats for the specified user
 */

/**
 * @swagger
 * /chat/find/{firstId}/{secondId}:
 *   get:
 *     summary: Find a chat
 *     description: Find a chat between two users
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: firstId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the first user
 *       - in: path
 *         name: secondId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the second user
 *     responses:
 *       '200':
 *         description: The chat between the two users, if it exists
 *       '500':
 *         description: Chat not found
 */
/**
 * @swagger
 * /chat/find/{firstId}:
 *   get:
 *     summary: Find a new  chat
 *     description: Find a chat between two users
 *     tags: [Chats]
 *     parameters:
 *       - in: path
 *         name: firstId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the first user
 *       - in: path
 *         name: secondId
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the second user
 *     responses:
 *       '200':
 *         description: The chat between the two users, if it exists
 *       '500':
 *         description: Chat not found
 */

/**
 * @swagger
 * 
 * /posts/{id}:
 *   post:
 *     summary: Create a new post
 *     description: Create a new post with the given data
 *     tags: [Posts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               creator:
 *                 type: string
 *             required:
 *               - title
 *               - description
 *     responses:
 *       200:
 *         description: Post created successfully
 *       400:
 *         description: Invalid data provided
 *       500:
 *         description: Internal server error
 *
 *   get:
 *     summary: Get a post by ID
 *     description: Get a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Post retrieved successfully
 *       400:
 *         description: Invalid ID provided
 *       500:
 *         description: Internal server error
 *
 *   delete:
 *     summary: Delete a post by ID
 *     description: Delete a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *        required: true
 *        content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post deleted successfully
 *       403:
 *         description: Action Forbidden
 *       500:
 *         description: Internal server error
 *
 * /posts/{id}/like:
 *   put:
 *     summary: Like a post by ID
 *     description: Like a post by ID
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *        required: true
 *        content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Post liked successfully
 *       400:
 *         description: Invalid ID provided
 *       500:
 *         description: Internal server error
 *
 * /posts/{id}/timeline:
 *   get:
 *     summary: Get all posts on user's timeline
 *     description: Get all posts on user's timeline
 *     tags: [Posts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Timeline posts retrieved successfully
 *       500:
 *         description: Error
*/

/**
 * @swagger
 * 
 * /message:
 *   post:
 *     summary: Add message
 *     description: Add a new message to the chat
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - chatId
 *               - sender
 *               - text
 *             properties:
 *               chatId:
 *                 type: string
 *                 description: Chat ID
 *               sender:
 *                 type: string
 *                 description: Sender's ID
 *               text:
 *                 type: string
 *                 description: Message text
 *     responses:
 *       "201":
 *         description: Created
 *       "400":
 *         description: Bad request
 *       "500":
 *         description: Internal server error
 *
 *   get:
 *     summary: Get messages
 *     description: Get all messages in the chat
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: chatId
 *         schema:
 *           type: string
 *         required: true
 *         description: Chat ID
 *     responses:
 *       "200":
 *         description: OK
 *       "404":
 *         description: Chat not found
 *       "500":
 *         description: Internal server error
 */

const accessLogPath = path.join(__dirname, 'access.log');
const accessLogStream = fs.createWriteStream(accessLogPath, { flags: 'a' });

// Set up the morgan middleware to use the writable stream
app.use(morgan('combined', { stream: accessLogStream }));
app.use(express.static('public'))
app.use('/images', express.static("images"))


//...................middleware.......................//
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(cors())
dotenv.config()

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true,useUnifiedTopology:true}).then(
    ()=>{
        app.listen(process.env.PORT,()=>{console.log("connected to MongoDB")})
    }
).catch((error)=>{
    console.log(error)
})




app.use('/auth',AuthRoute)
app.use('/user',UserRoute)
app.use('/posts',PostRoute)
app.use('/upload',UploadRoute)
app.use('/chat',ChatRoute)
app.use('/message', MessageRoute)

export default app;