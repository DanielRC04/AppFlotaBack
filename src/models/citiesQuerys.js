const citiesQuerys = {};

citiesQuerys.getCitiesQuery = () => {
    return `SELECT DISTINCT * FROM Cities`;
}

citiesQuerys.getCityQuery = (id) => {
    return `SELECT * FROM Cities WHERE Id = '${id}'`;
}

citiesQuerys.addCityQuery = () => {
    return `INSERT INTO Cities (Name, StateId) VALUES (:name, :stateId)`;
}

citiesQuerys.updateCityQuery = () => {
    return `UPDATE Cities SET Name = :name, StateId = :stateId WHERE Id = :id`;
}

citiesQuerys.deleteCityQuery = () => {
    return `DELETE FROM Cities WHERE Id = :id`;
}

module.exports = citiesQuerys;
