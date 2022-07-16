import express from 'express'
import { addProductHandler,updateProductHandler,deleteProductHandler,getAllProductHandler } from './handler';

const Router = express.Router()

Router.post('/addProduct',async (req,res) => {
    const {name,category,price,discount,description} = req.body;

        const result = await addProductHandler({name,category,price,discount,description})
        res.send(result)

})

Router.get('/allProducts', async (req,res) =>{
    const result = await getAllProductHandler()
    res.send(result)
})

Router.put('/updateProduct/:_id',async (req,res) =>{
    const updateProductObj = req.body   
    const result = await  updateProductHandler(req.params._id,updateProductObj)
    res.send(result) 
})

Router.delete('/deleteProduct/:_id',async (req,res) =>{
    const {_id} = req.params;
    try {
        const result = await deleteProductHandler({_id})
        res.send(result)
    } catch (error) {
        return error
    }
})



export const productRoute = Router