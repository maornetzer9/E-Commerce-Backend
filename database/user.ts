import { Schema, model } from "mongoose";
import { encryptionPassword } from '../utilities/bcrypt'

interface UserDocument extends Document { email: string; password: string, createAt: void | string; };


const user = new Schema<UserDocument>
({ 
    email: 
             {
                 type: String,
                 required: true,
             },
    password: 
             {
                 type: String,
                 required: true,
                 set: encryptionPassword.hash
             },

    createAt: 
             {
                type: Date,
                default: () => new Date().toLocaleString('en-US', { timeZone: 'Asia/Jerusalem' })
                       
            }         
});


export const User = model<UserDocument>('users', user);