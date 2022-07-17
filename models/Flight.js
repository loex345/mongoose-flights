const mongoose = reguire('mongoose');
const Schema = mongoose.Schema;


const flightSchema = new mongoose.Schema({
    airline:{
    type:String,
    enum:['American','Southwest' & 'United']
    },
    airport:{
     type:String,
     enum:['AUS','DFW','DEN','LAX','SAN'],
     default:'Den'
    },
    flightNo: Number,
    departs:{
      type:Date,
      default: function() { 
      return new Date().getFullYear();
    },
  }

});