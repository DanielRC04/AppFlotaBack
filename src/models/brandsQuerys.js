const brandsQuerys = {};

brandsQuerys.getBrandsQuery = () => {
    return `SELECT DISTINCT * FROM Brands`;
}

brandsQuerys.getBrandQuery = (id) => {
    return `SELECT * FROM Brands WHERE Id = '${id}'`;
}

brandsQuerys.addBrandQuery = () => {
    return `INSERT INTO Brands (Name) VALUES (:name)`;
}

brandsQuerys.updateBrandQuery = () => {
    return `UPDATE Brands SET Name = :name WHERE Id = :id`;
}

brandsQuerys.deleteBrandQuery = () => {
    return `DELETE FROM Brands WHERE Id = :id`;
}

module.exports = brandsQuerys;
