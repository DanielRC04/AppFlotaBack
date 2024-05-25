const carsQuerys = {};

carsQuerys.getCarsQuery = () => {
    return `SELECT DISTINCT * FROM Cars`;
}

carsQuerys.getCarQuery = (id) => {
    return `SELECT * FROM Cars WHERE Id = '${id}'`;
}

carsQuerys.addCarQuery = () => {
    return `INSERT INTO Cars (Name, Description, PriceHour, Stock, Model, LicensePlate, BrandId, CarCategoryId) VALUES (:name, :description, :priceHour, :stock, :model, :licensePlate, :brandId, :carCategoryId)`;
}

carsQuerys.updateCarQuery = () => {
    return `UPDATE Cars SET Name = :name, Description = :description, PriceHour = :priceHour, Stock = :stock, Model = :model, LicensePlate = :licensePlate, BrandId = :brandId, CarCategoryId = :carCategoryId WHERE Id = :id`;
}

carsQuerys.deleteCarQuery = () => {
    return `DELETE FROM Cars WHERE Id = :id`;
}

module.exports = carsQuerys;
