export default (sequelize, DataType) => {
    const Employee = sequelize.define(
        'employees', {
            id: {
                type: DataType.STRING,
                allowNull: false,
                primaryKey: true
            },
            firstName: {
                type: DataType.STRING,
                 
            },
            lastName: {
                type: DataType.STRING,
                 
            },
            gender: {
                type: DataType.STRING
            },
            dateOfBirth: {
                type: DataType.DATE
            },
            driversLicense: {
                type: DataType.INTEGER
            },
            citizenship: {
                type: DataType.STRING
            },
            currentLocation: {
                type: DataType.STRING
            }
        });
    return Employee;
};