const AdmSchema = require("../models/admSchema");
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

const { hashPassword } = require('../helpers/auth');

const getAll = async (req, res) => {
    try {
        const adms = await AdmSchema.find()
        res.status(200).json({message: 'Lista de Adms', adms})
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })        
    }
}



module.exports = {
    getAll,
}