const express = require("express");
const router = express.Router();

const controller = require("../controllers/pharmacyController");

router.get("/all", controller.getPharmacyAll);
router.post("/create", controller.createPharmacy);
router.get("/name", controller.getPharmacyByName);
router.get("/filter", controller.getPharmacyMultipleFilter);
router.get("/:id", controller.getPharmacyById);
router.put("/update/:id", controller.updatePhamarcyById);
router.delete("/delete/:id", controller.deletePharmacyById);


module.exports = router