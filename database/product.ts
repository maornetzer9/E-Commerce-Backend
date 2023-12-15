import { model, Schema } from 'mongoose';

export interface IProduct { id: string; createAt: void | string };


const product = new Schema<IProduct>({
    id:
    {
        type: String    
    },
    createAt:
    {
        type: Date,
        default: () => new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' })
    }
});

const Product = model<IProduct>('products', product);

export default Product;