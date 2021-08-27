import { Products } from "./products";

export class Order{
    _id!: String;
    orderPlacedOn!: Date;
    isDelivered!: Boolean;
    email!: String;
    total!: number;
    cart: Array<Products> = [];
}