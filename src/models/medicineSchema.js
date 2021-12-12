const mongoose = require('mongoose');

const medicineSchema = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,

    available:{
        type: Boolean,
        required: true
    },

    medicine_name:{
        type: String,
        required: true
    },

    composition: {
        type: String,
        required: true
    },

    batch: {
        type: String,
        required: true
    },

    manufacture: {
        type: String,
        required: true
    },

    expiration: {
        type: String,
        required: true
    },   

    controlled_use: {
        type: Boolean,
        required: true
    },

    retain_revenue:{
        type: Boolean,
        required: true
    },

    pharmacy_name: {
        type: String,
        required: true
    },

    pharmacy_address: {
       type: String,
       required: true
    },

    district: {
        type: String,
        required: true
    },

    pharmacy_city: {
       type: String,
       required: true
    },

    state: {
    type: String,
    required: true
    },

    cep: {
    type: String,
    required: true
    },

    pharmacy_telephone: {
       type: String,
       required: true
    },

    pharmacy_days_open: {
    type: String,
    required: true,
    },

    pharmacy_hours_of_operation: {
    type: String,
    required: true,
    },

    terms_of_use: {
    type: Boolean,
    required: true
    }

},{timestamps: true}
);

module.exports = mongoose.model("medicine", medicineSchema);








 
