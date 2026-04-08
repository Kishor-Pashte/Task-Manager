import express from 'express';
import taskController from '../controllers/taskController';
import auth from '../middlewares/authMiddleware';

const router = express.Router();

router.get('/tasks', auth, taskController.getAllTasks)
router.post('/tasks', auth, taskController.createTask);
router.put('/tasks/:id', auth, taskController.updateTask);
router.delete('/tasks/:id', auth, taskController.deleteTask);

export default router;
