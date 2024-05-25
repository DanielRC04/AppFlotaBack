const carImagesQuerys = {};

carImagesQuerys.getCarImagesQuery = () => {
    return `SELECT DISTINCT * FROM CarImages`;
}

carImagesQuerys.getCarImageQuery = (id) => {
    return `SELECT * FROM CarImages WHERE Id = '${id}'`;
}

carImagesQuerys.addCarImageQuery = () => {
    return `INSERT INTO CarImages (CarId, Image) VALUES (:carId, :image)`;
}

carImagesQuerys.updateCarImageQuery = () => {
    return `UPDATE CarImages SET CarId = :carId, Image = :image WHERE Id = :id`;
}

carImagesQuerys.deleteCarImageQuery = () => {
    return `DELETE FROM CarImages WHERE Id = :id`;
}

module.exports = carImagesQuerys;
