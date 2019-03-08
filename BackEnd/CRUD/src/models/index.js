import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  
  Employees: connection.import('../employees/model'),
  Companies: connection.import('../companies/model')
  
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

//Relations
models.Employees.belongsTo(models.Companies);
models.Companies.hasMany(models.Employees);


models.connection = connection;
models.Sequelize = Sequelize;

export default models;
