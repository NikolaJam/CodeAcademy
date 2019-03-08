import hat from 'hat';

import models from '../models/index';

const Companies = models.Companies;

const list = async(req, res, next) => {
  const result: Array = await Companies.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Companies.find({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    id,
    name,
    foundedOn,
    officeLocations,
    numberOfEmployees,
    citizenship,
    currentLocation
  }: {
    id: string,
    name: ?string,
    foundedOn: ?string,
    officeLocations: ?string,
    numberOfEmployees: ?string
  } = req.body;

  const companyID = hat();

  await Companies.create({
    id: companyID,
    name,
    foundedOn,
    officeLocations,
    numberOfEmployees,
    citizenship,
    currentLocation
  });
  res.status(201).send({ info: 'Company has been created!'});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    id: string,
    name: string,
    foundedOn: string,
    officeLocations: string,
    numberOfEmployees: string
  } = Object.assign({}, req.body);

  await Companies.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;

  await Companies.destroy({ where: { id }});
  res.status(202).send({ info: `Company ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}