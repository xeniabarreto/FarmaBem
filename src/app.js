const express = require('express');
const cors = require('cors');
//const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

require('dotenv-safe').config(); 
const db = require('./database/mongoConfig');

const app = express();

const index = require("./routes/index")
const phamarcyRoutes = require("./routes/pharmacyRoutes");
const medicineRoutes = require("./routes/medicineRoutes");
const amdRoutes = require("./routes/admRoutes");

db.connect() 

app.use(cors());
app.use(express.json());
//app.use(bodyParser.urlencoded({ extended: false }));


app.use("/", index);
app.use("/pharmacy", phamarcyRoutes);
app.use("/medicine", medicineRoutes);
app.use("/adm", amdRoutes);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app
