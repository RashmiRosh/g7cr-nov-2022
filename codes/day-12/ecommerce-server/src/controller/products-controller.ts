import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { ECommerceControllerContract } from "./ecommerce-controller.contract";
import { EcommerceBoContract } from "../bo/ecommerce-bo.contract";
import { Product } from "../models/product.model";
import diTokens from "../constants/di-tokens";
import { injectable, inject } from "inversify";
import 'reflect-metadata'
import generateResponse from "../utils/response-generator";

@injectable()
export class ProductsController implements ECommerceControllerContract {

    constructor(@inject(diTokens.PRODUCTS_BO_TOKEN) private bo: EcommerceBoContract<Product>) {

    }

    getAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const productId = Number(req.params.id)
            const product = await this.bo.get(productId)
            const response = generateResponse<Product>('found record', 200, product)
            res.send(response)

        } catch (error: any) {
            const errResponse = generateResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    getAllAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const products = await this.bo.getAll()
            const response = generateResponse<Product>('found records', 200, products)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    postAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const productData = <Product>req.body
            const added = await this.bo.add(productData)
            const response = generateResponse<Product>('added successfully', 201, added)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    putAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const id = Number(req.params.id)
            const productData = <Product>req.body
            const updated = await this.bo.update(productData, id)
            const response = generateResponse<Product>('updated record', 201, updated)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }

    deleteAction = async (req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<void> => {
        try {
            const id = Number(req.params.id)
            const deleted = await this.bo.remove(id)
            const response = generateResponse<Product>('deleted record', 201, deleted)
            res.send(response)
        } catch (error: any) {
            const errResponse = generateResponse<Product>(error.message, 500)
            res.send(errResponse)
        }
    }
}