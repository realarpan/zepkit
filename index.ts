import express, { Application, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

// Load environment variables
dotenv.config();

const app: Application = express();
const PORT: number = Number(process.env.PORT) || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check route
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to ZepKit API 🚀 - Groceries in Minutes",
    status: "Server is running",
  });
});

// Example route
app.get("/api/products", (req: Request, res: Response) => {
  res.json({
    success: true,
    products: [],
    message: "Products fetched successfully",
  });
});

// 404 handler
app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`ZepKit server running on http://localhost:${PORT}`);
});