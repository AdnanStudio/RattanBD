import { User } from "../models/user.js";
import ErrorHandler from "../utils/utility-class.js";
import { TryCatch } from "./error.js";

export const adminOnly = TryCatch(async (req, res, next)=>{
    // req.params means -> dynamic route or link-- api/v1/user/:id
    // req.query means -> question mark objeck on link-- api/v1/user/key?=24
    const {id} = req.query;

    if(!id){ return next(new ErrorHandler("Please log in first", 401))};

    const user = await User.findById(id);
    if(!user){ return next(new ErrorHandler("No user found", 401))};
    if(user.role !== "admin"){ return next(new ErrorHandler("Only admin can access", 403))};

    next();
})