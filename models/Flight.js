const mongoose = reguire('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new mongoose.Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departs: Date
});