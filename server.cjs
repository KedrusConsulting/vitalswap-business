/* eslint-disable no-undef */
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const fs = require("fs");

require("dotenv").config({ path: ".env" });

const app = express();
const PORT = process.env.PORT || 8001;

// Middleware
app.use(compression());

// Setup Morgan to log into a file
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "access.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));

// Serve static files
app.use(express.static(path.resolve(__dirname, "./dist")));

// Catch-all route
app.get("*", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist", "index.html"));
});

// Centralized error handling middleware
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);

  const status = err.status || 500;
  res.status(status).json({
    status: "error",
    message: status === 500 ? "Internal Server Error" : err.message,
  });
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`Received ${signal}. Closing server...`);
  server.close(() => {
    console.log("Server closed");
    process.exit(0);
  });

  // Forcefully close the server after 10s if it doesn't close
  setTimeout(() => {
    console.error("Forcing server shutdown");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

// Handle uncaught exceptions and unhandled rejections
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
  process.exit(1);
});

const server = app.listen(PORT, () => console.log(`App running on ${PORT}`));
