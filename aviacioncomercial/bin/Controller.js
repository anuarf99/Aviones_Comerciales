const mongoose = require("mongoose");
const Avion = require("./models/Avion");

class Controller{
    constructor(){
        this.connect();
    }
    async connect(){
        try{
            await mongoose.connect(
            'mongodb://localhost/AviacionComercial');
          console.log("Conectados a la base de datos")
        } catch(e){
            console.error(e)
        }
    }

    getAviones(res){
        Avion.find({}, (err,aviones)=>{
            if(err) throw err;
            res.send (aviones);
        })
    }



    getAvion(id, res){
        Avion.find({_id:id}, (err, avion)=>{
            if(err) throw err;
            res.send( avion );
        })
    }

    deleteAvion(id, res) {
        Avion.deleteOne({ _id: id }, function(err) {
          if (err) throw err;
          res.send({ message: "Avion eliminado" });
        });
      }
}



exports.controller = new Controller()