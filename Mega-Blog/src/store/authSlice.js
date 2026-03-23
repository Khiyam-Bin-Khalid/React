import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status: false,
    userData: null
}
const authSlice= createSlice({
    name:"auth",
    initialState,
    reducers:{
        login: (state, action)=>{
            state.status = true;
            state.userData=action.payload.userData;
        },
        logout: (state)=>{
            state.status = false;
            state.userData=  null;
        }
    }
})

// eslint-disable-next-line no-empty-pattern
export const { login, logout}= authSlice.actions;
export default authSlice.reducer;