import express from 'express'
import { createCategoryHandler,updateCategoryHandler,deleteCategoryHandler, getCategoryHandler,getProductByCategoryHandler } from './handler';


const Router = express.Router()

Router.get('/allCategories',async (req,res) =>{
    const result = await getCategoryHandler()
    res.send(result)
})

Router.post('/addCategory', async (req,res) => {



    try {
        const {name} = req.body;
         const result = await createCategoryHandler({name})

         res.send(result)

    } catch (error) {
        res.send(error)
        
    }

})

Router.put('/updateCategory/:_id',async(req,res) =>{
    try {
        const {_id} = req.params
        const {name} = req.body
        const result = await updateCategoryHandler({_id,name})

        res.send(result)

    } catch (error) {
        res.send(error)
        
    }
})

Router.delete('/deleteCategory/:_id', async (req,res) =>{
    const {_id}  =  req.params;

    try {
        const result = await deleteCategoryHandler({_id})
        res.send(result)
        
    } catch (error) {
        return error
    }
})

Router.get('/productByCategory',async (req,res) => {
    const category = req.query.category;
    const result = await getProductByCategoryHandler(category)

    return  res.send(result)





})

export const categoryRoute = Router;