import express from 'express';
import bodyParser from 'body-parser';
import { config } from './config'
import {categoryRoute} from './src/category/routes'
import { productRoute } from './src/product/routes';
const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

app.use('/category',categoryRoute)

app.use('/product',productRoute)




app.listen(config.PORT,() => {
    console.log(`server started at port no ${config.PORT}`)
})
