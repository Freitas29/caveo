export class Product {
    id: number;
    title: string;
    description: string;
    imageUrl: string
    price: number

    constructor(props: { id: number; title: string; description: string, imageUrl: string; price: number}) {
        this.id = props.id;
        this.title = props.title;
        this.description = props.description;
        this.imageUrl = props.imageUrl;
        this.price = props.price;
    }
}