import express from 'express';
import { logger } from './middleware/logger.js';
import userRoute from './routes/users.js';

const app = express();

// Middleware's
app.use(express.json());
app.use(logger);

app.get('/', (req, res) => {
    res.send('Welcome to express middleware demo')
});

app.use('/api/users', userRoute);

app.listen(3000, () => {
  console.log(`🚀 Server running at http://localhost:3000`);
});