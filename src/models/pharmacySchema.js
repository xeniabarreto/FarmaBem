const mongoose = require('mongoose');

const pharmacySchema = new mongoose.Schema ({
    id: mongoose.Schema.Types.ObjectId,

    cnpj: {
      type: String,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    address: {
      type: String,
      required: true
    },

    district: {
      type: String,
      required: true
    },

    city: {
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

    telephone: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true
    },

    days_open: {
      type: String,
      required: true,
    },

    hours_of_operation: {
      type: String,
      required: true,
    },

    terms_of_use: {
      type: Boolean,
      required: true
    }

},{ timestamps: true } 
);

module.exports = mongoose.model('pharmacy', pharmacySchema) 
