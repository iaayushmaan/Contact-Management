const express = require("express");
const app = express();
const ContactRouter = require("./routes/Contact.routes.js");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");

//dot config
dotenv.config();

app.use(express.json());
app.use(cors());
app.use("/api", ContactRouter);

app.listen(process.env.port, async () => {
  try {
    connectDB();
    console.log("Server is connected with DB");
  } catch (error) {
    console.log("Server is not connected with DB");
  }
  console.log(`Server is listening on Port : ${process.env.port}`);
});
