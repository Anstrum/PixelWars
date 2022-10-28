import express from 'express';
import { appRouter } from './app.router.js';

export const app = express();
app.use(express.json());
app.use(appRouter);

