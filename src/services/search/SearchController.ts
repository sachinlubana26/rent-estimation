import { db } from '../../models';
import { ApartmentInstance } from '../../models/Apartment';

export const getEstimateRent = async(zip_code: number, apartment_area: number): Promise<ApartmentInstance[]> => {
  try {
    const is_deleted: boolean = false;
    const rec: ApartmentInstance[] = await db.Apartment.findAll({
      attributes: ['apartment_type', 'apartment_rent'],
      where: {
        zip_code,
        apartment_area,
        is_deleted
      }
    });
    return rec;
  } catch(err) {
    throw new Error(err);
  }
}

