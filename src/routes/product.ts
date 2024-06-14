import Router, { Request, Response } from 'express';
import MockRequestService from '../services/fakeUrl';
import { Responses } from '../responses';

const router = Router();


router.get('/E-Commerce', async (req: Request, res: Response): Promise<any> => {
    try 
    {
        const response = await new MockRequestService().fakeProducts();
        res.status(200).json(response);
    }
    catch(err) 
    {
        console.log(err);
        res.status(500).send(Responses.server_error)
    }

})


export const productRouter = router;