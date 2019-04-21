import { Request, Response, NextFunction } from "express";
import { getEstimateRent } from "./SearchController";
import { checkSearchParams } from "../../middleware/checks";
import { serverError } from "../../utils/ErrorHandler";

export default [
  {
    path: "/api/v1/search",
    method: "get",
    handler: [
      checkSearchParams,
      async ({ query }: Request, res: Response, next: NextFunction) => {
        try {
          const result = await getEstimateRent(query.zip_code, query.apartment_area);
          res.status(200).send(result);          
        } catch(err) {
          serverError(err, res, next)
        }
      }
    ]
  }
];
