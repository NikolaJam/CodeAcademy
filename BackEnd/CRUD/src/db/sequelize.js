import Sequelize from 'sequelize';
import dbConfig from '../../config/mysql.json';

const currentDb = dbConfig[process.env.NODE_ENV || 'dev'];
const sequelize = new Sequelize(currentDb);

sequelize.sync({ force: true });

export default sequelize;