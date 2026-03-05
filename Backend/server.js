const express = require("express");
const path = require("path");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* Serve frontend */
app.use(express.static(path.join(__dirname, "../Frontend/dist")));

app.get("*", (req,res)=>{
  res.sendFile(path.join(__dirname,"../Frontend/dist/index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log("Server running on port",PORT);
});
