const rentsQuerys = {};

rentsQuerys.getRentsQuery = () => {
    return `SELECT * FROM Rents`;
}

rentsQuerys.getRentQuery = (id) => {
    return `SELECT * FROM Rents WHERE Id = ${id}`;
}

rentsQuerys.addRentQuery = () => {
    return `INSERT INTO Rents (UserId1, UserId, CarId, StartDate, EndDate, RealEndDate, Price, RentStatus, Remarks) 
    VALUES (:userId1, :userId, :carId, :startDate, :endDate, :realEndDate, :price, :rentStatus, :remarks)`;
}

rentsQuerys.updateRentQuery = () => {
    return `UPDATE Rents SET UserId1 = :userId1, UserId = :userId, CarId = :carId, 
    StartDate = :startDate, EndDate = :endDate, RealEndDate = :realEndDate, Price = :price, 
    RentStatus = :rentStatus, Remarks = :remarks WHERE Id = :id`;
}

rentsQuerys.deleteRentQuery = () => {
    return `DELETE FROM Rents WHERE Id = :id`;
}

module.exports = rentsQuerys;
