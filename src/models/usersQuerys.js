const usersQuerys = {};

usersQuerys.getUsersQuery = () => {
    return `SELECT * FROM Users`;
}

usersQuerys.getUserQuery = (id) => {
    return `SELECT * FROM Users WHERE Id = '${id}'`;
}

usersQuerys.addUserQuery = () => {
    return `INSERT INTO Users (Id, Document, FirstName, LastName, Email, Password, Phone, Photo, UserType, CityId, UserName, NormalizedUserName, NormalizedEmail, EmailConfirmed, PasswordHash, SecurityStamp, ConcurrencyStamp, PhoneNumber, PhoneNumberConfirmed, TwoFactorEnabled, LockoutEnd, LockoutEnabled, AccessFailedCount) 
    VALUES (:id, :document, :firstName, :lastName, :email, :password, :phone, :photo, :userType, :cityId, :userName, :normalizedUserName, :normalizedEmail, :emailConfirmed, :passwordHash, :securityStamp, :concurrencyStamp, :phoneNumber, :phoneNumberConfirmed, :twoFactorEnabled, :lockoutEnd, :lockoutEnabled, :accessFailedCount)`;
}

usersQuerys.updateUserQuery = () => {
    return `UPDATE Users SET Document = :document, FirstName = :firstName, LastName = :lastName, Email = :email, Password = :password, Phone = :phone, Photo = :photo, UserType = :userType, CityId = :cityId, UserName = :userName, NormalizedUserName = :normalizedUserName, NormalizedEmail = :normalizedEmail, EmailConfirmed = :emailConfirmed, PasswordHash = :passwordHash, SecurityStamp = :securityStamp, ConcurrencyStamp = :concurrencyStamp, PhoneNumber = :phoneNumber, PhoneNumberConfirmed = :phoneNumberConfirmed, TwoFactorEnabled = :twoFactorEnabled, LockoutEnd = :lockoutEnd, LockoutEnabled = :lockoutEnabled, AccessFailedCount = :accessFailedCount 
    WHERE Id = :id`;
}

usersQuerys.deleteUserQuery = () => {
    return `DELETE FROM Users WHERE Id = :id`;
}

module.exports = usersQuerys;
