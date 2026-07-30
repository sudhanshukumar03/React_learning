import { createSlice } from "@reduxjs/toolkit";

const itialState = {
 status: false,
 userData:null
};  

const authSlice = createSlice({
    name: "auth",
    initialState: itialState,   
    reducers: {
        login:(state,action)=>{
            state.status=true;
            state.userData=action.payload;
        }
    }
});
export default authSlice.reducer;