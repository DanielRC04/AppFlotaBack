const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const fs = require('fs');
dotenv.config();

//ROUTES
const routerStates = require("./routes");
// const routerUsers = require("./routes/adminUsers");
// const routerCars = require("./routes/adminCars");
// const routerRents = require("./routes/adminRents");

const cors = require('cors');

const app = express();
app.use(cors());

app.use(express.json({ limit: '150mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: false, parameterLimit: 50000 }));

//rutas estaticas
app.use(express.json({ limit: "150mb" }));

app.use(
  express.urlencoded({ limit: "50mb", extended: false, parameterLimit: 50000 })
);

routerStates(app);
// routerUsers(app);
// routerCars(app);
// routerRents(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => { console.log(`🚀 Server listening on port ${PORT} y esta en modo: ${process.env.NODE_ENV}`)});