const statesRoutes = require('./statesRoutes');
const brandsRoutes = require('./brandsRoutes');
const carCategoriesRoutes = require('./carCategoriesRoutes');
const citiesRoutes = require('./citiesRoutes');
const carImagesRoutes = require('./carImagesRoutes');
const carsRoutes = require('./carsRoutes');
const usersRoutes = require('./usersRoutes');
const rentsRoutes = require('./rentsRoutes');

module.exports = app => {
    app.use('/STATES', statesRoutes);
    app.use('/BRANDS', brandsRoutes);
    app.use('/CAR_CATEGORIES', carCategoriesRoutes);
    app.use('/CITIES', citiesRoutes);
    app.use('/CAR_IMAGES', carImagesRoutes);
    app.use('/CARS', carsRoutes);
    app.use('/USERS', usersRoutes); 
    app.use('/RENTS', rentsRoutes);
}
