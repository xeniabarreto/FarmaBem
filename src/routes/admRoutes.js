const express = require('express');
const router = express.Router();

const { checkToken } = require("../middlewares/auth");

const controller = require ('../controllers/admController')

router.get("/all", checkToken, controller.getAll); 
router.get("/id/:id", checkToken, controller.getById);
router.post("/register", controller.register); // publica - para criação
router.post("/login", controller.loginWithCreatingToken); // publica - para gerar token
router.put("/update/:id", checkToken, controller.updateById);
router.delete("/delete/:id", checkToken, controller.deleteById);




module.exports = router