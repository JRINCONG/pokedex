import { configureStore } from "@reduxjs/toolkit";
import users from "./slice/user.slice";


export const store = configureStore({
    reducer:{
        users,
    }
})