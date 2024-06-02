
import mongoose from "mongoose";
import bodyParser from "body-parser";
import  express  from "express";
import cors from "cors";
import dotenv from 'dotenv';
import { userRouter } from './routes/user';
import { productRouter } from './routes/product';
dotenv.config()


const URI = process.env.MONGOOSE_URI || 'mongodb+srv://maornetzer9:Maor013254777@maor.quyl8kx.mongodb.net/E-Commerce';
const BACKEND_PORT = process.env.PORT || 4200;
const FRONTEND_PORT = process.env.FRONTEND_PORT || 3000;
const app = express()

const corsOptions = 
{
    origin  : process.env.FRONTEND_PRODUCTION,
    method  : 'GET, HEAD, PUT, PATCH, POST, DELETE',
}

  app.use(cors(corsOptions))
app.use( cors( ) );
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/product', productRouter);

  
mongoose.connect(URI)
.then(()  =>  {
    const name = mongoose.connection.name

    console.log({
        name, 
        Backend: BACKEND_PORT, 
        Frontend: FRONTEND_PORT,
        connected: true,
    })
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1);
  });



app.listen(BACKEND_PORT, () => console.log(`Server Running On Port ${BACKEND_PORT}`))