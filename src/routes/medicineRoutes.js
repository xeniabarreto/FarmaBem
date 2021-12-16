const express = require("express");
const router = express.Router();

const controller = require("../controllers/medicineController");

router.get("/all", controller.getAll);
router.get("/filter", controller.searchMultiple);
router.get("/:id", controller.findMedicineById);
router.post("/create", controller.createMedicine);
router.put("/update/:id", controller.updateById);
router.delete("/delete/:id", controller.deleteMedicineById);


module.exports = router