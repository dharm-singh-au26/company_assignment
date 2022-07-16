import { Category } from "../../db";

export const getCategory = async (categoryData) =>{
   

    return await Category.find({...categoryData})
}

export const createCategory = async (category) =>{
    return await Category.create(category)
}

export const updateCategory = async (id,Data) => {
    return await Category.findByIdAndUpdate(id,Data)
    
}

export const deleteCategory = async (id) =>{
    return await Category.findByIdAndDelete(id)
}

export const getProductByCategory = async (category) => {
    const result = await  Category.aggregate([
        {
            $match : {
                name : category
            }

        },
        {
        $lookup : {
            from: "products",
            localField:"_id",
            foreignField: "category",
            as: "products"
        }}
    ])

    return result
}