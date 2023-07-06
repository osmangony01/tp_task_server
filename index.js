const express = require('express');
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

const services = require("./data/Services.json");

app.get("/", (req, res) => {
    res.send("Server is running . . .");
})

app.get("/services", (req, res) =>{
    res.send(services);
})

app.listen(port, () => {
    console.log(`TP Task Server is running on port: ${port}`);
})