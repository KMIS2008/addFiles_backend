const express = require ("express");
const cors =require ("cors");

// const authRouter = require('./routes/authRouter.js');

const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use(cors());

app.use(express.json());


// app.use("/api/user", authRouter);


app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});


  app.listen(3003, () => {
  console.log("Server is running. Use our API on port: 3002");
})
