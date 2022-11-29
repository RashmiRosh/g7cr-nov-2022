import { Product } from "../models/product.model";
import { EcommerceBoContract } from "./ecommerce-bo.contract";
import { EcommerDaoContarct } from "../dao/ecommerce-dao.contract";
import { injectable } from "inversify";
import diTokens from "../constants/di-tokens";
import 'reflect-metadata'

@injectable()
export class ProductsBo implements EcommerceBoContract<Product>{
    constructor(@inject(diTokens.PRODUCTS_DAO_TOKEN) private dao: EcommerDaoContarct<Product>) {

    }
    async add(data: Product): Promise<Product> {
        try {
            const products = await this.dao.read()
            let id = 1
            if (products.length > 0) {
                id = products[products.length - 1].productId + 1
            }
            data.productId = id
            products.push(data)
            await this.dao.write(products)
            return data
        } catch (error) {
            throw error
        }
    }
    async update(data: Product, id: number): Promise<Product> {
        try {
            const products = await this.dao.read()
            const index = products.findIndex((p) => p.productId === id)
            if (index !== -1) {
                data.productId = id
                products.splice(index, 1, data)
                await this.dao.write(products)
                return data
            } else
                throw new Error(`the product with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }
    async remove(id: number): Promise<Product> {
        try {
            const products = await this.dao.read()
            const index = products.findIndex((p) => p.productId === id)
            if (index !== -1) {
                const deleted = products.splice(index, 1)[0]
                await this.dao.write(products)
                return deleted
            } else
                throw new Error(`the product with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }
    async get(id: number): Promise<Product> {
        try {
            const products = await this.dao.read()
            const found = products.find((p) => p.productId === id)
            if (found) {
                return found
            } else
                throw new Error(`the product with id:${id} does not exist`)
        } catch (error) {
            throw error
        }
    }
    getAll(): Promise<Product[]> {
        throw new Error("Method not implemented.");
    }
}