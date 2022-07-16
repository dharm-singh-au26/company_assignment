import mongoose from "mongoose";
import {categorySchema} from './src/model/category'
import {productSchema} from './src/model/product'



const connection = mongoose.createConnection('mongodb://localhost:27017/muhavara', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    
    console.log('DataBase Is Connected')
})

const Category = connection.model('categories',categorySchema)
const Product = connection.model('products',productSchema)



export {
    Category,
    Product
}