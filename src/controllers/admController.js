const AdmSchema = require("../models/admSchema");
const mongoose = require("mongoose");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
//const secret = process.env.SECRET;

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


const register = async (req, res) => {
    const { username, email, password, terms_of_use } = req.body
    
    try {
        const newUser = new AdmSchema ({
            username,
            email,
            password,
            terms_of_use
        })

        const passwordHashed = await hashPassword(newUser.password, res)
        newUser.password = passwordHashed

        const savedUser = await newUser.save()
        res.status(200).json({
            message: "Adm cadastrado com sucesso!",
            savedUser
        })

    } catch (error) {
        res.status(500).json({
            message: error.message
        })        
    }
}


const loginWithCreatingToken = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await AdmSchema.findOne({ email: email });

        if(!user){
            return res.status(422).send({message: "E-mail não encontrado."})
        }

        const checkPassword = await bcrypt.compare(password, user.password)

        if(!checkPassword){
            return res.status(422).send({ message: "Senha incorreta!" })
        }

        const secret = process.env.SECRET
        const token = jwt.sign({
            id: user._id
        }, secret)

        res.status(200).json({
            message: "Login realizado! Seja bem-vinde!",
            token
        })
    
    } catch (error) {
        res.status(500).json({
            message: error.message
        })        
    }
}

module.exports = {
    getAll,
    register,
    loginWithCreatingToken,


}