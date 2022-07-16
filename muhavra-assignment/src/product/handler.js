import { getProduct,createProduct,updateProduct,deleteProduct } from "./repo";


export const addProductHandler = async (product) => {
    const {name,category,price,discount,description} = product
    const isProductExist = await getProduct({name:product.name})

    if(isProductExist.length){
        return 'product is already available'
    }else{
        const newProduct = {
            name,category,price,discount,description
        }
        const savaProductInDb = createProduct(newProduct)
        return savaProductInDb
    }
}

export const updateProductHandler = async (_id,product) => {

    return  updateProduct(_id,product)
    
}

export const deleteProductHandler = async (_id) => {
    const deleteProductFromDB =  deleteProduct(_id)
    return deleteProductFromDB
}

export const getAllProductHandler = async (products) => {
    const allProductsFromDB = getProduct(products)
    return allProductsFromDB
}

