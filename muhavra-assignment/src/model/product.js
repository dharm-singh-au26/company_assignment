import mongoose from 'mongoose'

export const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    category :{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Category',
        required :true
    },
    price :{
        type :Number,
        required :true
    },
    discount: {
        type :Number
    },
    description :{
        type : String ,
        required : true
    }

})