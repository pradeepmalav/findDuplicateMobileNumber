
import http from 'http'
import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv'
import mongoose from "mongoose";

import { contactRouter } from './src/router/contactRoute.js';
import {dbConnect} from './src/config/db.js';

mongoose.set('strictQuery', false)
dbConnect();
const app = express();
const httpServer = http.createServer(app);

dotenv.config({ path: '.env' });


// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Routers
app.use('/', contactRouter)

app.get('/', (req, res) => {
    res.status(200).send({
        message:"Welcome User"
    })
})

const port = process.env.PORT || 8000;
httpServer.listen(port, () => { console.log(`Server is running on http://localhost:${port}`) })

