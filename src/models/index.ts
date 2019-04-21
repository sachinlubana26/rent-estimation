import Sequelize from 'sequelize';
import { DbInterface } from '../typings/DbInterface';
import { ApartmentFactory } from './Apartment';
import * as sequelizeConfig from '../config/sequelizeConfig.json';

const createModels = (): DbInterface => {
  const { database, username, password, params } = sequelizeConfig;
  const sequelize = new Sequelize(database, username, password, params);

  const db: DbInterface = {
    sequelize,
    Sequelize,
    Apartment: ApartmentFactory(sequelize, Sequelize)
  };

  return db;
};

export const db = createModels();
