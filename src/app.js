const express = require('express');
const cors = require('cors');

require('dotenv-safe').config(); 
const db = require('./database/mongoConfig');

const index = require("./routes/index")
const phamarcyRoutes = require("./routes/pharmacyRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const amdRoutes = require("./routes/admRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", index);
app.use("/pharmacy", phamarcyRoutes);
/*app.use("/medicine", medicineRoutes);
//app.use("/adm", amdRoutes)*/

db.connect() 

module.exports = app
