statesQuerys = {};

statesQuerys.getStatesQuery = () => {
    return `SELECT DISTINCT * FROM States`;
}

statesQuerys.getStateQuery = (id) => {
    
    return `SELECT * FROM States WHERE id = '${id}'`;
}

statesQuerys.addStateQuery = () => {
    return `INSERT INTO States (Name) VALUES (:name)`;
}

statesQuerys.updateStateQuery = () => {
    return `UPDATE States SET Name = :name WHERE id = :id`;
}

statesQuerys.deleteStateQuery = () => {
    return `DELETE FROM States WHERE id = :id`;
}

module.exports = statesQuerys;