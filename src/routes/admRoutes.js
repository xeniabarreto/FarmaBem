const express = require('express');
const router = express.Router();
const loginAuth = require('../helpers/auth');
const { checkToken } = require("../middlewares/auth");

const controller = require ('../controllers/admController')

router.get("/all", checkToken, controller.getAll); //rota privada
router.get("/id/:id", controller.getById);
router.post("/register", controller.register);
router.post("/login", controller.loginWithCreatingToken);
router.put("/update/:id", controller.updateById);
router.delete("/delete/:id", controller.deleteById);


module.exports = router