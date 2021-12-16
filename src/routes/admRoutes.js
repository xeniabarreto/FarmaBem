const express = require('express');
const router = express.Router();

const { checkToken } = require("../middlewares/auth");

const controller = require ('../controllers/admController')

router.get("/all", checkToken, controller.getAdmAll); 
router.get("/:id", checkToken, controller.getAdmById);
router.post("/create", controller.createAdm); // publica - para criação
router.post("/login", controller.loginAdmAndCreateToken); // publica - para gerar token
router.put("/update/:id", checkToken, controller.updateAdmById);
router.delete("/delete/:id", checkToken, controller.deleteAdmById);



module.exports = router