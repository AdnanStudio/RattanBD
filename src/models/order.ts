import mongoose from "mongoose";
//import validator from "validator";


const schema = new mongoose.Schema(
{
    shippingInfo:{
        address:{
            type: String,
            required: [true, "Please enter Address"],
        },
        city:{
            type: String,
            required: [true, "Please enter City"],
        },
        state:{
            type: String,
            required: [true, "Please enter State"],
        },
        country:{
            type: String,
            required: [true, "Please enter Country"],
        }, 
        pinCode:{
            type: Number,
            required: [true, "Please enter Pin Code"],
        },
    },

    user:{
        type: String,
        ref: "User",
        required: true,
    },

    subtotal:{
        type: Number,
        required: true,
    },
    tax:{
        type: Number,
        required: true,
    },
    shippingCharges:{
        type: Number,
        required: true,
    },
    discount:{
        type: Number,
        required: true,
    },
    total:{
        type: Number,
        required: true,
    },
    status:{
        type: String,
        enum: ["Processing", "Shipped", "Delivered"],
        default: "Processing"
    },

    orderItems: [
        {
            name: String,
            photo: String,
            price: Number,
            quantity: Number,
            productId: {
                type: mongoose.Types.ObjectId,
                ref: "Product",
            }
        }
    ],
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


export const Order = mongoose.model("Order", schema);



