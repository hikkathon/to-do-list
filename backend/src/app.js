// app.js
import cors from "cors"
import "dotenv/config"
import express from "express"
import apiRoutes from "./api/index.js"

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Использование маршрутов
app.use('/api', apiRoutes);

export default app;
