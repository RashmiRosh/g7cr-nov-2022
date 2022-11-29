import { Product } from "../models/product.model";
import { EcommerceBoContract } from "./ecommerce-bo.contract";
import { EcommerDaoContarct } from "../dao/ecommerce-dao.contract";
import { injectable } from "inversify";

@injectable()
export class ProductsBo implements EcommerceBoContract<Product>{
    constructor(private dao: EcommerDaoContarct<Product>) {

    }
    add(data: Product): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    update(data: Product, id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    remove(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    get(id: number): Promise<Product> {
        throw new Error("Method not implemented.");
    }
    getAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}