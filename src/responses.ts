export interface ResponsesProps {code: number, message: string}

export const Responses: Record<string, ResponsesProps>=  
{
    success                             : {code: 200, message: 'success'},
    
    email_required                      : {code: 3, message: 'email required...'},
    password_required                   : {code: 4, message: 'password required...'},
    
    
    server_error                        : {code: 500, message: 'internal server error'},
    incorrect_password                  : {code: 401, message: 'incorrect password try again...'},
}