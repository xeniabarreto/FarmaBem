const MedicineSchema = require('../models/medicineSchema');
const mongoose = require('mongoose');

const getAll = async (req, res) => {
    try {
      const medicine = await MedicineSchema.find()
      res.status(200).json(medicine) 
  
    } catch (error) {
      res.status(500).json({
        message: error.message
      })
    }
  };


const createMedicine = async (req, res) => {
    try {
        const newMedicine = new MedicineSchema({
            _id: new mongoose.Types.ObjectId(),
            available: req.body.available,
            medicine_name: req.body.medicine_name,
            composition: req.body.composition,
            batch: req.body.batch,
            manufacture: req.body.manufacture,
            expiration: req.body.expiration,
            controlled_use: req.body.controlled_use,
            retain_revenue: req.body.retain_revenue,
            pharmacy_name: req.body.pharmacy_name,
            pharmacy_address: req.body.pharmacy_address,
            district: req.body.district,
            pharmacy_city: req.body.pharmacy_city,
            state: req.body.state,
            cep: req.body.cep,
            pharmacy_telephone: req.body.pharmacy_telephone,
            pharmacy_days_open: req.body.pharmacy_days_open,
            pharmacy_hours_of_operation: req.body.pharmacy_hours_of_operation,
            terms_of_use: req.body.terms_of_use
    
        });

        const savedMedicine = await newMedicine.save();
        res.status(201).json({
            message: `Produto ${newMedicine.medicine_name} foi cadastrado com sucesso!`,
            savedMedicine
          })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};

const searchMultiple = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}


  module.exports = {
    getAll,
    createMedicine,

  }

  /*

available:Boolean
medicine_name:String
composition:String
batch:String
manufacture: String
expiration: String
controlled_use: Boolean
retain_revenue: Boolean
pharmacy_name:String
pharmacy_address:String
district:String
pharmacy_city: String
state:String
cep:String
pharmacy_telephone:String,
pharmacy_days_open:String,
pharmacy_hours_of_operation:String,
terms_of_use:Boolean

    */

