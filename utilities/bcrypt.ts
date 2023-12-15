import bcrypt  from 'bcrypt';

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';

export const encryptionPassword = 
{
    hash(myPlaintextPassword: string ): string
    {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(myPlaintextPassword, salt)

        return  hash 
    },

    compare_hash(myPlaintextPassword: string, hash: string): boolean
    {
        return bcrypt.compareSync(myPlaintextPassword, hash);
    }
}




