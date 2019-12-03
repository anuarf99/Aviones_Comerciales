const express = require("express");
const cors = require("cors");
const app = express();
const { controller } = require("./Controller")

app.use(cors());

app.get("/", (req, res ) =>{
    res.send("Hola Mundo");
})

app.get("/aviones", (req,res)=>{
  controller.getAviones(res);
})


app.get("/aviones/:id", function(req, res) {
    let { id } = req.params;
    controller.getAvion(id, res);
  });

  
app.delete("/aviones/:id", function(req, res) {
    let { id } = req.params;
    controller.deleteAvion(id, res);
  });
exports.app = app;
