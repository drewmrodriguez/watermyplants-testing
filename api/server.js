const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("./users/users-router");
const plantsRouter = require("./plants/plants-router");

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

server.use("/api/users", usersRouter);
server.use("/api/plants", plantsRouter);

//SANITY CHECK ENDPOINT
// server.get("/", (req, res, next)=>{
//     res.json({
//         message: "API Up"
//     })
// })

//Global Error Handling
server.use((err, req, res, next) => {
  res.json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;