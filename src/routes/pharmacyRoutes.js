const express = require("express");
const router = express.Router();


const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');

const mainRoutes = require('./routes/main');



const controller = require("../controllers/pharmacyController");

router.get("/all", controller.getAll);
router.post("/create", controller.createPharmacy);
router.get("/find_name", controller.findPharmacyByName);
router.get("/search", controller.searchMuliple);
router.get("/find/:id", controller.findPharmacyById);
router.put("/update/:id", controller.updatePhamarcyById);
router.delete("/delete/:id", controller.deletePharmacyById);


module.exports = router