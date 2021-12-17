const MedicineSchema = require('../models/medicineSchema');
const mongoose = require('mongoose');


const getMedicineAll = async (req, res) => {
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
            pharmacy_state: req.body.pharmacy_state,
            cep: req.body.cep,
            pharmacy_telephone: req.body.pharmacy_telephone,
            pharmacy_days_open: req.body.pharmacy_days_open,
            pharmacy_hours_of_operation: req.body.pharmacy_hours_of_operation,
            terms_of_use: req.body.terms_of_use
    
        });
        

        if (!newMedicine.medicine_name) {
          return res.status(406).json({
            message: "Obrigatório preenchimento nome ou composição do medicamento."
          })
        }

        if (!newMedicine.composition) {
          return res.status(406).json({
            message: "Obrigatório preenchimento da composição do medicamento."
          })
        }

        if (!newMedicine.batch) {
          return res.status(406).json({
            message: "Obrigatório preenchimento da Lote do medicamento."
          })
        }

        if (!newMedicine.manufacture) {
          return res.status(406).json({
            message: "Obrigatório preenchimento da data de Fabricação do medicamento."
          })
        }

        if (!newMedicine.expiration) {
          return res.status(406).json({
            message: "Obrigatório informar a Data de Vencimento do medicamento.",
            example_format: "01/10/2022"
          })
        }

        if (!newMedicine.pharmacy_name) {
          return res.status(406).json({
            message: "Obrigatório preenchimento nome da Farmácia."
          })
        }

        if (newMedicine.pharmacy_city !== "SÃO PAULO") {
          return res.status(406).json({
            message: "Permitido apenas Farmácias localizadas na cidade de São Paulo - SP."
          })
        }

        if (newMedicine.pharmacy_state !== "SÃO PAULO") {
          return res.status(406).json({
            message: "Permitido apenas Farmácias localizadas no Estado de São Paulo."
          })
        }

        if (!newMedicine.terms_of_use) {
          return res.status(406).json({
            message: "O cadastro do medicamento será permitido apenas, após aceitar nossos termos de uso."
          })
        }


        const savedMedicine = await newMedicine.save();
        res.status(201).json({
            message: `Medicamento ${newMedicine.medicine_name} foi cadastrado com sucesso!`,
            savedMedicine
          })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
};


const getMedicineMultipleFilter = async (req, res) => {
    try {
        const filter = await MedicineSchema.find(req.query)

        if (filter.length === 0) {
            return res.status(404).json({
                message: "Desculpe não conseguimos encontrar esta pesquisa!",
                pay_attention: "Os parâmetros para este tipo de pesquisa precisam estar idêntico ao cadastrado no Banco de Dados."
            })
        }

        if (filter) {
            res.status(200).json({
                message: "Medicamento encontrado: ",
                filter
            })
        }
    } catch (error) {
        res.status(400).json({
            menssage: error.message
        })
    }
}


const getMedicineById = async (req, res) => {
    try {
        const medicine = await MedicineSchema.findById(req.params.id)
        if (medicine) {
          res.status(200).json({
            message: "Medicamento encontrado: ",
            medicine
          })
        } else {
          res.status(404).json({
            message: "Desculpe-nos, não possuímos este medicamento!"
          })
        }
    
      } catch (error) {
        res.status(500).json({
          message: error.message
        })
      }    
}


const updateMedicineById = async (req, res) => {
    try {
        const findMedicine = await MedicineSchema.findById(req.params.id)

        if(findMedicine){
            findMedicine.available = req.body.available || findMedicine.available
            findMedicine.medicine_name = req.body.medicine_name || findMedicine.medicine_name
            findMedicine.composition = req.body.composition || findMedicine.composition
            findMedicine.batch = req.body.batch || findMedicine.batch
            findMedicine.manufacture = req.body.manufacture || findMedicine.manufacture
            findMedicine.expiration = req.body.expiration || findMedicine.expiration
            findMedicine.controlled_use = req.body.controlled_use || findMedicine.controlled_use
            findMedicine.retain_revenue = req.body.retain_revenue || findMedicine.retain_revenue
            findMedicine.pharmacy_name = req.body.pharmacy_name || findMedicine.pharmacy_name
            findMedicine.pharmacy_address = req.body.pharmacy_address || findMedicine.pharmacy_address
            findMedicine.district = req.body.district || findMedicine.district
            findMedicine.pharmacy_city = req.body.pharmacy_city || findMedicine.pharmacy_city
            findMedicine.pharmacy_state = req.body.pharmacy_state || findMedicine.pharmacy_state
            findMedicine.cep = req.body.cep || findMedicine.cep
            findMedicine.pharmacy_telephone = req.body.pharmacy_telephone || findMedicine.pharmacy_telephone
            findMedicine.pharmacy_days_open = req.body.pharmacy_days_open || findMedicine.pharmacy_days_open
            findMedicine.pharmacy_hours_of_operation = req.body.pharmacy_hours_of_operation || findMedicine.pharmacy_hours_of_operation
            findMedicine.terms_of_use = req.body.terms_of_use || findMedicine.terms_of_use
        }
           


        if (!findMedicine.pharmacy_name) {
          return res.status(406).json({
            message: "Obrigatório preenchimento nome da Farmácia."
          })
        }

       if(findMedicine.cep.length < 9 || findMedicine.cep.length > 9){
          return res.status(406).json({
            message: "Atenção: o cep deverá conter 9 digitos.",
            for_example: "12345-678"
          });
        }

      
    const savedMedicine = await findMedicine.save();
        res.status(200).json({
          message:`Medicamento ${findMedicine.medicine_name} atualizado com sucesso!`,
          savedMedicine
        })

    } catch (error) {
      res.status(500).json({
        message: error.message
      })        
    }
}


const deleteMedicineById = async (req, res) => {
    try {
        const findMedicine = await MedicineSchema.findById(req.params.id)
    
        if (findMedicine) {
          await findMedicine.delete()
          res.status(200).json({
            menssage: `Medicamento ${findMedicine.medicine_name} deletado com sucesso!`
          })
        } else {
          res.status(404).json({
            message: "Medicamento não encontrado!"
          })
        }
    
      } catch (error) {
        res.status(400).json({
          menssage: error.message
        })
      }    
}


  module.exports = {
    getMedicineAll,
    createMedicine,
    getMedicineMultipleFilter,
    getMedicineById,
    updateMedicineById,
    deleteMedicineById,

  }

 