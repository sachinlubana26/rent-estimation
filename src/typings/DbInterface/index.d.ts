import * as Sequelize from 'sequelize';
import { ApartmentAttributes, ApartmentInstance } from '../../models/Apartment';

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  Apartment: Sequelize.Model<ApartmentInstance, ApartmentAttributes>;
}
