import { Product } from "./Product";

export class ProductList {
    private products: Product[] = []

    constructor(products: Product[]) {
        this.products = products;
    }

    getProducts(): Product[] { 
        return this.products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }
}