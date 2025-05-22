import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

// Routes
app.get('/', (_req, res) => {
  res.send('Hello from Express + TypeScript!');
});

// Auth routes
app.use('/auth', authRoutes);

export default app;
