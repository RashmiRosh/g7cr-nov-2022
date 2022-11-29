import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ECommerceControllerContract } from "./ecommerce-controller.contract";
import { injectable, inject } from "inversify";
import { EcommerceBoContract } from "../bo/ecommerce-bo.contract";
import { Product } from "../models/product.model";
import diTokens from "../constants/di-tokens";

@injectable()
export class ProductsController implements ECommerceControllerContract {

    constructor(@inject(diTokens.PRODUCTS_BO_TOKEN) private bo: EcommerceBoContract<Product>) {

    }

    getAction(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getAllAction(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    postAction(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    putAction(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        throw new Error("Method not implemented.");
    }
    deleteAction(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> {
        throw new Error("Method not implemented.");
    }

}