export default (sequelize, DataType) => {
    const Companies = sequelize.define(
        'companies', {
            id: {
                type: DataType.STRING,
                allowNull: false,
                primaryKey: true
            },
            name: {
                type: DataType.STRING
            },
            foundedOn: {
                type: DataType.DATE,
                 
            },
            officeLocations: {
                type: DataType.STRING
            },
            numberOfEmployees: {
                type: DataType.STRING
            }
        });
    return Companies;
};