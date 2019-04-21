import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface ApartmentAttributes {
  id?: Sequelize.DataTypeUUID;
  createdAt?: Date;
  updatedAt?: Date;
  apartment_id: Sequelize.DataTypeUUIDv4;
  zip_code: number;
  apartment_area: number;
  apartment_rent: number;
  apartment_type: string;
  is_deleted: boolean;
};

export interface ApartmentInstance extends Sequelize.Instance<ApartmentAttributes>, ApartmentAttributes {
};

export const ApartmentFactory = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): Sequelize.Model<ApartmentInstance, ApartmentAttributes> => {
  const attributes: SequelizeAttributes<ApartmentAttributes> = {
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: null
    },    
    apartment_id: {
      type: DataTypes.UUID
    },
    zip_code: {
      type: DataTypes.INTEGER
    },
    apartment_area: {
        type: DataTypes.SMALLINT
    },
    apartment_rent: {
        type: DataTypes.SMALLINT
    },
    apartment_type: {
        type: DataTypes.STRING
    },
    is_deleted: {
        type: DataTypes.BOOLEAN
    }
  };

  const Apartment = sequelize.define<ApartmentInstance, ApartmentAttributes>('Apartment', attributes);

  return Apartment;
};