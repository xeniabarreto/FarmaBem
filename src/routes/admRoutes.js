const express = require('express');
const router = express.Router();

const { checkToken } = require("../middlewares/auth");

const controller = require ('../controllers/admController')

router.get("/all", checkToken, controller.getAll); //rota privada
router.get("/id/:id", checkToken, controller.getById);
router.post("/register", controller.register); // publica
router.post("/login", controller.loginWithCreatingToken); // publica
router.put("/update/:id", controller.updateById);
router.delete("/delete/:id", controller.deleteById);




module.exports = router