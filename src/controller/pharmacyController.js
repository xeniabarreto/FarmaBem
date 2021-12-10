const PharmacySchema = require ('../models/pharmacySchema');
const mongoose = require ('mongoose');


const jwt = require ('jsonwebtoken');
const bcrypt = require ('bcrypt');
const SECRET = process.env.SECRET;


const getAll = async (req, res) => {
  try {
    const pharmacy = await PharmacySchema.find()
    res.status(200).json(pharmacy)

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};


const createPharmacy = async (req, res) => {
  try {
    const newPharmacy = new PharmacySchema ({
      _id: new mongoose.Types.ObjectId(),
      name: req.body.name,
      address: req.body.address,
      district: req.body.district,
      city: req.body.city,
      cep: req.body.cep,
      telephone: req.body.telephone,
      email: req.body.email,
      days_open: req.body.days_open,
      hours_of_operation: req.body.hours_of_operation
    })

    const savedPharmacy = await newPharmacy.save();
    res.status(201).json({
      message: `Farmacia ${newPharmacy.name} foi cadastrada com sucesso!`,
      savedPharmacy
    })

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};


const findPharmacyByName = async (req, res) => {
  try {
    const findPharmacy = await PharmacySchema.find({ name: new RegExp (req.query.name, "i")})
    res.status(200).json(findPharmacy)

  } catch (error) {
    res.status(500).json ({
      message: error.message
    })
  }
};


const searchMuliple = async (req, res) => {
  try {
    const filter = await PharmacySchema.find(req.query)
    
    if(filter.length === 0) {
      return res.status(404).json({
        message: "Desculpe, não conseguimos encontrar esta pesquisa!",
        pay_attention: "Os parâmetros para este tipo de pesquisa precisam estar idêntico ao cadastrado no Banco de Dados."
      })
    }
       
    if(filter) {
      res.status(200).json({
        message: "Farmácia encontrada: ",
        filter
      })
    } 
      
  } catch (error) {
    res.status(400).json({
      menssage: error.message
    })
  }
};


const findPharmacyById = async (req, res) => {
  try {
    const pharmacy = await PharmacySchema.findById(req.params.id)
    if(pharmacy){
      res.status(200).json({
        message: "Farmácia encontrada: ",
        pharmacy
      })
    } else {
      res.status(404).json({
        message: "Farmácia não encontrada!"
      })
    }

  } catch (error) {
    res.status(500).json({
      message: error.message
    })
  }
};


const updatePhamarcyById = async (req, res) => {
  try {
    const findPharmacy = await PharmacySchema.findById(req.params.id)

    if(findPharmacy){
      findPharmacy.name = req.body.name || findPharmacy.name
      findPharmacy.address = req.body.address || findPharmacy.address
      findPharmacy.district = req.body.district || findPharmacy.district
      findPharmacy.city = req.body.city || findPharmacy.city
      findPharmacy.cep = req.body.cep || findPharmacy.cep
      findPharmacy.telephone = req.body.telephone || findPharmacy.telephone
      findPharmacy.email = req.body.email || findPharmacy.email
      findPharmacy.days_open = req.body.days_open || findPharmacy.days_open
      findPharmacy.hours_of_operation = req.body.hours_of_operation || findPharmacy.hours_of_operation
    
    } 
      
      const savedPharmacy = await findPharmacy.save();
      res.status(200).json({
        message: `Farmácia ${findPharmacy.name} atualizada com sucesso!`,
        savedPharmacy
      })     

    
  } catch (error) {
    res.status(500).json({
      message: message.error
    })
  }
};


const deletePharmacyById = async (req, res) => {
  try {
    const findPharmacy = await PharmacySchema.findById(req.params.id)
    await findPharmacy.delete()

    res.status(200).json({
      menssage: `Farmácia ${findPharmacy.name} deletada com sucesso!`
    })
  } catch (error) {
    res.status(400).json({
      menssage: error.message
    })
  }
};





module.exports = {
  getAll,  
  createPharmacy,
  findPharmacyByName,
  searchMuliple,
  findPharmacyById,  
  updatePhamarcyById,
  deletePharmacyById,
}


