import express from 'express'
import cors from 'cors'
import errMiddleware from './middlewares/errorMiddleware';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js'
const app = express();

connectDB();

app.use(errMiddleware());
app.use(express.json());
app.use(cors());


//routes
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes)

const PORT = process.env.PORT

app.listen(PORT || 5000, () => {
    console.log(`Server is listening on port ${PORT}`)
})