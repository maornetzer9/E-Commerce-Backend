import { Router, Request } from 'express'
import { User } from '../database/user';
import { Responses } from '../responses';
import { encryptionPassword } from '../utilities/bcrypt';

const router = Router();

interface UserServiceProps { id?: object; user?: object; products?: [] }


class UserService 
{
    constructor(){}

    async sign(req: Request): Promise<object>
    {
        try
        {
            const vals : UserServiceProps = {};
            const response = Responses.success
            const {email, password} = req.body
    
            if(!email) return Responses.email_required;
            if(!password) return Responses.password_required;

            const isUserExists = await User.findOne({email})
    
            if(isUserExists !== null)
            {
                const isValidPassword = encryptionPassword.compare_hash(password, isUserExists.password);

                if(!isValidPassword) return Responses.incorrect_password;

               vals.id = isUserExists._id;
               
               return {...response, ...vals}
            }
            else
            {
                const user = await new User({email, password}).save();
                vals.id = user._id 
                return {...response, ...vals};
            }
        }
        catch(err)
        {   
            console.log(err)
            return {...Responses.server_error};
        }
    }
    
}


export default { UserService }