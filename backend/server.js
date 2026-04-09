import express from "express";
import cors from "cors";
import errMiddleware from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(errMiddleware);

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

connectDB();
const PORT = process.env.PORT;
app.listen(PORT || 4000, () => {
  console.log(`Server is listening on port ${PORT}`);
});
