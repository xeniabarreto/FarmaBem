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
      cnpj: req.body.cnpj,
      name: req.body.name,
      address: req.body.address,
      district: req.body.district,
      city: req.body.city,
      state: req.body.state,
      cep: req.body.cep,
      telephone: req.body.telephone,
      email: req.body.email,
      days_open: req.body.days_open,
      hours_of_operation: req.body.hours_of_operation,
      terms_of_use: req.body.terms_of_use
    });

    if(!newPharmacy.cnpj){
      return res.status(406).json({
        message: "Obrigatório preenchimento do CNPJ."
      })
    }    

    if(newPharmacy.cnpj.length > 18 || newPharmacy.cnpj.length < 18){
      return res.status(406).json({
        message: "Antenção: preencher o CNPJ corretamente com 14 dígitos.",
        for_example: "12.345.678/0001-23"
      })
    }

    if(!newPharmacy.name){
      return res.status(406).json({
        message: "Obrigatório preenchimento do nome da Farmácia."
      });
    }

    if(!newPharmacy.address){
      return res.status(406).json({
        message: "Obrigatório preenchimento do endereço completo."
      });
    }

    if(!newPharmacy.district){
      return res.status(406).json({
        message: "Obrigatório preenchimento do bairro."
      });
    }

    if(newPharmacy.city !== "São Paulo"){
      return res.status(406).json({
        message: "Cadastro permitido apenas para Farmácias localizadas na cidade de São Paulo - SP."
      });
    }

    if(newPharmacy.state !== "São Paulo"){
      return res.status(406).json({
        message: "Cadastro permitido apenas para Farmácias localizadas no estado de São Paulo."
      });
    }

    if(!newPharmacy.cep){
      return res.status(406).json({
        message: "Obrigatório preenchimento do CEP."
      });
    }

    if(newPharmacy.cep.length < 9 || newPharmacy.cep.length > 9){
      return res.status(406).json({
        message: "Atenção: o cep deverá conter 9 digitos.",
        for_example: "12345-678"
      });
    }

    if(!newPharmacy.telephone){
      return res.status(406).json({
        message: "Obrigatório preenchimento do telefone ou celular." 
      });
    }

    if(!newPharmacy.email){
      return res.status(406).json({
        message: "Obrigatório preenchimento do e-mail."
      })
    }

    if(!newPharmacy.days_open){
      return res.status(406).json({
        message: "Obrigatório preenchimento dos dias da semana de funcionamento."
      })
    }

    if(!newPharmacy.hours_of_operation){
      return res.status(406).json({
        message: "Obrigatório preenchimento do horário de funcionamento."
      })
    }

    const { cnpj } = req.body;
    const findPharmacyByCnpj = await PharmacySchema.findOne({
      cnpj
    });

    if(findPharmacyByCnpj) {
      return res.status(406).json({
        message: "Este CNPJ já encontra-se cadastrado em nosso Banco de Dados.",
        pay_attention: "É permitido apenas o cadastro de uma Farmácia por CNPJ."
      });
    }

    const { email } = req.body
    const findPharmacyByEmail = await PharmacySchema.findOne({
      email
    });

    if(findPharmacyByEmail) {
      return res.status(406).json({
        message: "O e-mail informado ja encontra-se cadastrado, por gentileza informar outro endereço."
      })
    };

    if(!newPharmacy.terms_of_use){
      return res.status(406).json({
        message: "O cadastro da Farmácia será permitido apenas após aceitar nossos termos de uso."
      })
    }

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
    const findPharmacy = await PharmacySchema.find({ name: new RegExp (req.query.name, "i")});

    if(findPharmacy.length === 0) {
      return res.status(404).json({
        message: "Farmácia não cadastrada."
      });
    }

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
      findPharmacy.cnpj = req.body.cnpj || findPharmacy.cnpj
      findPharmacy.name = req.body.name || findPharmacy.name
      findPharmacy.address = req.body.address || findPharmacy.address
      findPharmacy.district = req.body.district || findPharmacy.district
      findPharmacy.city = req.body.city || findPharmacy.city
      findPharmacy.state = req.body.state || findPharmacy.state
      findPharmacy.cep = req.body.cep || findPharmacy.cep
      findPharmacy.telephone = req.body.telephone || findPharmacy.telephone
      findPharmacy.email = req.body.email || findPharmacy.email
      findPharmacy.days_open = req.body.days_open || findPharmacy.days_open
      findPharmacy.hours_of_operation = req.body.hours_of_operation || findPharmacy.hours_of_operation
      findPharmacy.terms_of_use = req.body.terms_of_use || findPharmacy.terms_of_use
    } 
      
    if(newPharmacy.cnpj.length > 18 || newPharmacy.cnpj.length < 18){
      return res.status(406).json({
        message: "Antenção: preencher o CNPJ corretamente com 14 dígitos.",
        for_example: "12.345.678/0001-23"
      })
    }

    if(newPharmacy.city !== "São Paulo"){
      return res.status(406).json({
        message: "Cadastro permitido apenas para Farmácias localizadas na cidade de São Paulo - SP."
      });
    }

    if(newPharmacy.state !== "São Paulo"){
      return res.status(406).json({
        message: "Cadastro permitido apenas para Farmácias localizadas no estado de São Paulo."
      });
    }


    if(newPharmacy.cep.length < 9 || newPharmacy.cep.length > 9){
      return res.status(406).json({
        message: "Atenção: o cep deverá conter 9 digitos.",
        for_example: "12345-678"
      });
    }

    const { cnpj } = req.body;
    const findPharmacyByCnpj = await PharmacySchema.findOne({
      cnpj
    });

    if(findPharmacyByCnpj) {
      return res.status(406).json({
        message: "Este CNPJ já encontra-se cadastrado em nosso Banco de Dados.",
        pay_attention: "É permitido apenas um CNPJ por Farmácia cadastrada."
      });
    }

    const { email } = req.body
    const findPharmacyByEmail = await PharmacySchema.findOne({
      email
    });

    if(findPharmacyByEmail) {
      return res.status(406).json({
        message: "O e-mail informado ja encontra-se cadastrado, por gentileza informar outro endereço."
      })
    };

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


