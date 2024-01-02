import { Request, Response, Router } from 'express';
import { Responses } from '../responses'; 
import UserService  from '../services/user'

const router = Router();

router.use('/sign', async (req: Request, res: Response): Promise<void> => {
    try
    {
        const response = await new UserService.UserService().sign(req)
        res.status(200).json(response);
    }
    catch(err)
    {
        console.log(err)
        res.status(500).json(Responses.server_error)
    }
})


export const userRouter = router;