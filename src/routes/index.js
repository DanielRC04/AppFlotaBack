const statesRoutes = require('./statesRoutes');
const brandsRoutes = require('./brandsRoutes');
const carCategoriesRoutes = require('./carCategoriesRoutes');
const citiesRoutes = require('./citiesRoutes');

module.exports = app => {
    app.use('/STATES', statesRoutes);
    app.use('/BRANDS', brandsRoutes);
    app.use('/CAR_CATEGORIES', carCategoriesRoutes);
    app.use('/CITIES', citiesRoutes);
}
