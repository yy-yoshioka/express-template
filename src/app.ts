import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth';
import { prisma } from './lib/prisma';

// Load environment variables
dotenv.config();

// Initialize Express app
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

// For checking that Prisma is connected
app.get('/debug/db', async (_req, res) => {
  try {
    // Count users in the database
    const count = await prisma.user.count();
    res.json({ message: 'Database connection working', userCount: count });
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).json({ message: 'Database connection error' });
  }
});

export default app;
