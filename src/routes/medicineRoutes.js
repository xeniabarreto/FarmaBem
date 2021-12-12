const express = require("express");
const router = express.Router();

const controller = require("../controllers/medicineController");

router.get("/all", controller.getAll);
router.post("/create", controller.createMedicine);


module.exports = router