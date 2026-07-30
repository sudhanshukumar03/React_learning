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
        },
        logout:(state)=>{   
            state.status=false;
            state.userData=null;
        }
    }
   

    })
     //definition of post is to be done in the postSlice.js file because we are going to create a separate slice for post,why do we need to create a separate slice for post because we are going to create a separate component for post and we are going to use the postSlice.js file to manage the state of the post component,so we need to create a separate slice for post
    const postSlice = createSlice({
        name:"post",
        initialState:initialState,
        reducers:{
            posts: (state, action) => {
                state.status = true;
                state.posts = action.payload;
                
            }
        }

});
export const {login,logout}=authSlice.actions;
export default authSlice.reducer;