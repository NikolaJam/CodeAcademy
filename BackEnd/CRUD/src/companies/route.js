import { Router } from 'express';
import actions from './actions';

const companiesRouter = Router();

companiesRouter.get('/companies', actions.list);
companiesRouter.get('/companies/:id', actions.get);
companiesRouter.post('/companies', actions.create);
companiesRouter.put('/companies/:id', actions.update);
companiesRouter.delete('/companies/:id', actions.del);

export default companiesRouter;
