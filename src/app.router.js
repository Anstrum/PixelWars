import express from 'express';
import { mainRouter } from './routes/main-router.js';


export const appRouter = express.Router();

appRouter.use('/', mainRouter);