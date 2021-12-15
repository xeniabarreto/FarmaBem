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



/*

OPÇÕES DE ROTAS COM VALIDAÇÃO DE TOKEN E CHECAR AUTENTICAÇÃO
router.get("/all", checkToken, controller.getAll);
router.get("/:id", checkToken, controller.getById);
router.post("/register", loginAuth, controller.createUser);
router.put("/update", checkToken, loginAuth, controller.updatedUSer);
router.delete("/delete", checkToken, controller.deleteUser);
 */

module.exports = router