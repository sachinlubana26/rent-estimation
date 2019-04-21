import { Request, Response, NextFunction } from "express";
import { HTTP400Error } from "../utils/httpErrors";

export const checkSearchParams = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.query.zip_code || !req.query.apartment_area) {
    throw new HTTP400Error("Missing request parameters (zip_code or size)");
  } else {
    next();
  }
};
