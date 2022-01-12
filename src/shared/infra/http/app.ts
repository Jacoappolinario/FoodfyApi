import 'reflect-metadata';
import express from 'express';

import '@shared/container';
import createConnection from '@shared/infra/typeorm';

import { router } from './routes';

createConnection();
const app = express();

app.use(express.json());

app.use(router);

export { app };
