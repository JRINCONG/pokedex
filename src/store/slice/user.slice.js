import { createSlice } from "@reduxjs/toolkit";

 const users = createSlice({

    name:'users',
    initialState:'',
    reducers:{
          
        setUsers:(_state,action) => action.payload
    }

})

export const { setUsers } = users.actions;
export default users.reducer