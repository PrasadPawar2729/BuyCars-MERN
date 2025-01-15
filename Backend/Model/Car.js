const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    dealerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: [String], required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    mileage: { type: Number, required: true },
});

module.exports = mongoose.model('Car', carSchema);
