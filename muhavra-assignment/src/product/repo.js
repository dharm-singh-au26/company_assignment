import { Product } from "../../db";

export const getProduct = async (productData) => {
    return await Product.find({...productData})
} 

export const createProduct = async (productData) => {
    return await Product.create(productData)
}

export const updateProduct = async (id,product) =>{
    return await Product.findByIdAndUpdate(id,product)
}

export const deleteProduct = async (id) =>{
    return await Product.findOneAndDelete(id)
}

