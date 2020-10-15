import express from 'express';
import 'express-async-error';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';
dotenv.config();

import './database/connection';
import routes from './routes';
import errorHandler from './errors/handle';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(errorHandler);

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => console.log(`Server running in port ${PORT}`));

