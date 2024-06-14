import axios, { AxiosRequestConfig } from 'axios';
import Product from '../database/product';

class MockRequestService 
{
    constructor(){}

    async MockProducts(): Promise<any>
    {
        try 
        {
            const response: AxiosRequestConfig<any> = await axios.get('https://fakestoreapi.com/products?limit=8')

            const { data } = response;
            const productIds = data.map((product: any) => product.id);

            const existingProducts = await Product.find({id: {$in: productIds}});

            if(existingProducts.length === data.length)
            {
                return data
            }
            else
            {
                const newProductIds = productIds.filter((productId: number) => !existingProducts.some((existsProduct) => existsProduct.id === productId));
                await Product.insertMany(newProductIds.map((productId: string) => ({id: productId})));

                return data
            }
        }
        catch(err)
        {
            return err
        }
    } 
}

export default MockRequestService;