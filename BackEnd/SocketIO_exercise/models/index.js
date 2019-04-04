import Sequelize from 'sequelize';
import connection from '../db/sequelize';

const models = {
  Messages: connection.import('../messages/model'),
};

//Relations


models.connection = connection;
models.Sequelize = Sequelize;

export default models;
