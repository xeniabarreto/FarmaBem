const PharmacySchema = require ('../models/pharmacySchema')
const mongoose = require ('mongoose')

const jwt = require ('jsonwebtoken')
const bcrypt = require ('bcrypt')

const createPharmacy = async (req, res) => {
    try {
      const newPharmacy = new PharmacySchema({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        
      });

      const savedPharmacy = await newPharmacy.save();
      res.status(201).json({
        message: `Farmacia ${newPharmacy.name} foi cadastrada com sucesso!`,
        savedPharmacy,
      });

    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  };
  
module.exports = {
    createPharmacy,
    
}