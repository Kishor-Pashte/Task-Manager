import Task from '../models/taskModel.js'

const createTask = async(req, res, next) => {
    try {
        const {title, description} = req.body;
        if(!title) {
            return res.status(400).json({message: 'Title is required'})
        }

        const task = await Task.create(req.body);

        res.status(201).json({message: 'Task created succcessfully'})
    }catch(e) {
        next(e)
    }
}

const getAllTasks = async(req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json('Task fetched successfully', tasks)

    }catch(e) {
        next(e)
    }
}

const updateTask = async(req, res, next) => {
    try {
        const {id} = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {new: true});
        if(!updateTask) {
            return res.status(404).json({message: 'Task not found'})
        }
           
        res.status(200).json({message: 'Task updated successfully!', updatedTask})

    }catch(e) {
        next(e)
    }
}


const deleteTask = async(req, res, next) => {
    try {
        const {id} = req.params;

        const deletedTask = await Task.findByIdAndDelete(id);
        if(!deletedTask) {
            return res.status(404).json({message: 'Task not found'})
        }

        res.status(200).json({message: 'Task deleted successfully'. deletedTask})

    }catch(e) {
        next(e)
    }
}

export default {createTask, updateTask, deleteTask, getAllTasks}