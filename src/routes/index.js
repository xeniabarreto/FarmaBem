const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>{
    res.status(200).json({
        "titulo": "API Farma Bem",
        "version":"1.0.0",
        "mensagem":"Criada com proposito de doações de medicamentos.",
        "mensagem":"Seja bem-vinde :)"
        
    })
})

module.exports = router