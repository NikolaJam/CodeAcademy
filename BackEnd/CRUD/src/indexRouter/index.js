import { Router } from 'express';

import employees from '../employees/index';
import companies from '../companies/index';
 
const indexRouter = Router();
 
indexRouter.use(employees.route);
indexRouter.use(companies.route);

export default indexRouter;