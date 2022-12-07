
import express from 'express';

import { contactlist } from "../controller/contactController.js"
export const contactRouter = express.Router();

contactRouter.get('/contactlist',contactlist);
