const express = require("express");
const router = express.Router();

const controller = require("../controllers/pharmacyController");

router.get("/all", controller.getAll);
router.post("/create", controller.createPharmacy);
router.get("/name", controller.findPharmacyByName);
router.get("/filter", controller.searchMuliple);
router.get("/:id", controller.findPharmacyById);
router.put("/update/:id", controller.updatePhamarcyById);
router.delete("/delete/:id", controller.deletePharmacyById);


module.exports = router