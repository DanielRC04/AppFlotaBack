const carCategoriesQuerys = {};

carCategoriesQuerys.getCarCategoriesQuery = () => {
    return `SELECT * FROM CarCategories`;
}

carCategoriesQuerys.getCarCategoryQuery = (id) => {
    return `SELECT * FROM CarCategories WHERE Id = '${id}'`;
}

carCategoriesQuerys.addCarCategoryQuery = () => {
    return `INSERT INTO CarCategories (Name) VALUES (:name)`;
}

carCategoriesQuerys.updateCarCategoryQuery = () => {
    return `UPDATE CarCategories SET Name = :name WHERE Id = :id`;
}

carCategoriesQuerys.deleteCarCategoryQuery = () => {
    return `DELETE FROM CarCategories WHERE Id = :id`;
}

module.exports = carCategoriesQuerys;
