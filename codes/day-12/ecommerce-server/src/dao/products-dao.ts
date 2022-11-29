import { readFileSync, writeFileSync } from "fs";
import { Product } from "../models/product.model";
import { EcommerDaoContarct } from "./ecommerce-dao.contract";

const FILE_PATH = process.env.FILE_PAH || './src/data/products.json'

export class ProductsDao implements EcommerDaoContarct<Product>{
    async write(data: Product[]): Promise<void> {
        try {
            writeFileSync(FILE_PATH, JSON.stringify(data))
        } catch (error) {
            throw error
        }
    }
    async read(): Promise<Product[]> {
        try {
            const data = JSON.parse(readFileSync(FILE_PATH).toString())
            const products: Product[] =
                data.map(
                    function (p: any): Product {
                        return {
                            productId: p.productId,
                            productName: p.productName,
                            productCode: p.productCode,
                            releaseDate: p.releaseDate,
                            description: p.description,
                            price: p.price,
                            imageUrl: p.imageUrl,
                            starRating: p.starRating
                        }
                    }
                )
            return products
        } catch (error) {
            throw error
        }
    }
}