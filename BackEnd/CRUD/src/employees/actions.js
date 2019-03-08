import hat from 'hat';

import models from '../models/index';

const Employees = models.Employees;

const list = async(req, res, next) => {
  const result: Array = await Employees.findAll();
  res.status(200).send(result);
  await next;
};

const get = async(req, res, next) => {
  const { id }: { id: string } = req.params;

  const result: Object = await Employees.find({ where: { id }});
  res.status(200).send(result);

  await next;
};

const create = async(req, res, next) => {
  const {
    id,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    driversLicense,
    citizenship,
    currentLocation
  }: {
    id: string,
    firstName: string,
    lastName: ?string,
    gender: ?string,
    dateOfBirth: ?string,
    driversLicense: ?number,
    citizenship: ?string,
    currentLocation: ?string
  } = req.body;

  const employeeID = hat();

  await Employees.create({
    id: employeeID,
    firstName,
    lastName,
    gender,
    dateOfBirth,
    driversLicense,
    citizenship,
    currentLocation
  });
  res.status(201).send({ info: `Employee ${firstName} has been created!`});

  await next;
};

const update = async(req, res, next) => {
  const { id }: { id: string } = req.params;
  
  const updateData: {
    firstName: ?string,
    lastName: ?string,
    email: ?string,
    score: ?string,
    startedStudies: ?string,
    gender: ?string,
    dateOfBirth: ?string,
    driversLicense: ?number,
    citizenship: ?string,
    currentLocation: ?string
  } = Object.assign({}, req.body);

  await Employees.update(updateData, { where: { id }})
  res.status(204);

  await next;
};

async function del(req, res, next) {
  const { id }: { id: string } = req.params;

  await Employees.destroy({ where: { id }});
  res.status(202).send({ info: `Employee ${id} has been removed!`});

  await next;
}

export default {
  get,
  list,
  create,
  del,
  update
}