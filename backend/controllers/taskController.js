import Task from "../models/Task.js";

const createTask = async (req, res, next) => {
  try {
    const { title, isDone, createdAt } = req.body;
    if (!title) {
      return res.status(400).json({ message: "Task title is required" });
    }

    const task = await Task.create(req.body);

    res.status(201).json({ message: "Task created successfully", task });
  } catch (e) {
    next();
  }
};

const getTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();

    res.status(200).json({ message: "Task fetched successfully", task });
  } catch (e) {
    next();
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedTask = await Task.findByIdAndUpdate(
      req.body,
      { _id: id },
      {
        new: true,
      },
    );

    if (!updateTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task updated successfully", task: updatedTask });
  } catch (e) {
    next();
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTask = await Task.findByIdAndDelete({ _id: id });

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res
      .status(200)
      .json({ message: "Task deleted successfully", task: deletedTask });
  } catch (e) {
    next();
  }
};

export default { createTask, getTasks, updateTask, deleteTask };
