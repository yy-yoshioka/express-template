import { Router, Request, Response } from 'express';
import { authMiddleware } from '../middleware/auth';
import { signToken } from '../utils/jwt';

const router = Router();

// POST /auth/login - User login
router.post('/login', (req: Request, res: Response) => {
  // For demo purposes - in a real app, validate credentials against a database
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Mock user - in a real app, retrieve from database
  const user = { id: '1', email };

  // Generate JWT and set cookie
  signToken(user, res);

  res.status(200).json({ message: 'Login successful', user });
});

// POST /auth/signup - User registration
router.post('/signup', (req: Request, res: Response) => {
  // For demo purposes - in a real app, save to database
  const { email, password } = req.body;

  // Simple validation
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Mock user creation - in a real app, save to database
  const user = { id: '1', email };

  // Generate JWT and set cookie
  signToken(user, res);

  res.status(201).json({ message: 'User created successfully', user });
});

// GET /auth/me - Get current user info (protected route)
router.get('/me', authMiddleware, (req: Request, res: Response) => {
  // User is available from middleware
  res.status(200).json({
    message: 'User authenticated',
    user: req.user,
  });
});

export default router;
