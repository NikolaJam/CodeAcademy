import { Router } from 'express';
import actions from './actions';

const employeeRoute = Router();

employeeRoute.get('/employees', actions.list);
employeeRoute.get('/employees/:id', actions.get);
employeeRoute.post('/employees', actions.create);
employeeRoute.put('/employees/:id', actions.update);
employeeRoute.delete('/employees/:id', actions.del);

export default employeeRoute;
