import mongoose from "mongoose";
import validator from "validator";


const schema = new mongoose.Schema(
{
    name: {
        type: String,
        required: [true, "Please enter Name"]
    },
    photo: {
        type: String,
        required: [true, "Please enter Photo"]
    },
    price: {
        type: Number,
        required: [true, "Please enter Price"]
    }, 
    stock: {
        type: Number,
        required: [true, "Please enter Stock"]
    },
    category: {
        type: String,
        required: [true, "Please enter Category"],
        trim: true,
    },
},
{
    timestamps: true
});

// schema.virtual("age").get(function (){
//     const today = new Date();
//     const dob = this.dob;

//     let age = today.getFullYear() - dob.getFullYear();

//     if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()))
//      {
//         age--;
//     }

//     return age;
// })


export const Product = mongoose.model("Product", schema);



