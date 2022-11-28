const express = require("express");
const bodyparser = require("body-parser");
const morgan = require("morgan");
const messageRoutes = require("./route/message");
const connectDB = require("./database/config");
const app = express();

// log requests
app.use(morgan("tiny"));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended: true }));

//middleware
app.use(express.json());
app.use("/message", messageRoutes);
app.get("/", (req, res) => {
  res.send("Hello Homepage");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
