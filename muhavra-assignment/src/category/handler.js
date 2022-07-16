import { createCategory ,getCategory,updateCategory,deleteCategory ,getProductByCategory } from "./repo";


export const getCategoryHandler = async (categoryData) => {
    const allCategory = await getCategory(categoryData)
    return allCategory 
}

export const createCategoryHandler = async (categoryData) => {

    const isCategoryExist = await getCategory({name:categoryData.name})

    if(isCategoryExist.length){
        return 'Category is already available'
    }else{
        const newCategory = {
            name : categoryData.name
        }

        const saveCategoryInDb = createCategory(newCategory)

        return saveCategoryInDb
    }

}
export const updateCategoryHandler = async (category) =>{
    const {_id,name} = category
    // const isCategoryExist = await Category.findOne({_id})
    if(isCategoryExist){

        const newUpdateCategory = {
            _id,
            name 
        }
    
        const saveUpdatedCategoryInDb = updateCategory(newUpdateCategory._id ,{name:newUpdateCategory.name})
    
        return saveUpdatedCategoryInDb
    }else{
        return {
            message : 'category not available'
        }
    }

}

export const deleteCategoryHandler = async (_id) =>{


        const deleteCategoryFromDB = await  deleteCategory(_id)
        return   deleteCategoryFromDB

  
}

export const getProductByCategoryHandler = async (categoryName) => {
    return await getProductByCategory(categoryName)
    
}