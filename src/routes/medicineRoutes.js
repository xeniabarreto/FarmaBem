const express = require("express");
const router = express.Router();

const controller = require("../controllers/medicineController");

router.get("/all", controller.getMedicineAll);
router.get("/filter", controller.getMedicineMultipleFilter);
router.get("/:id", controller.getMedicineById);
router.post("/create", controller.createMedicine);
router.put("/update/:id", controller.updateMedicineById);
router.delete("/delete/:id", controller.deleteMedicineById);


module.exports = router