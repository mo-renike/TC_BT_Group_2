import express from 'express';

const router = express.Router();

// Placeholder routes
router.get('/', (req, res) => {
  res.json({ message: 'Hi' });
});


export default router;