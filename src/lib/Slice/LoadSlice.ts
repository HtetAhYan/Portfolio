import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState = {
    isLoading: true,
    menuLoading: true,
    path:'',
}
export const loadSlice=createSlice({
    name:'load',
    initialState,
    reducers:{
        setLoading:(state:typeof initialState,action:PayloadAction<boolean>)=>{
            state.isLoading=action.payload
        },
        setMenuLoading:(state:typeof initialState,action:PayloadAction<boolean>)=>{
            state.menuLoading=action.payload
        },
        setPath:(state:typeof initialState,action:PayloadAction<string>)=>{
            state.path=action.payload
        },setClear:(state:typeof initialState)=>{
            state.isLoading=true
            state.menuLoading = true
            
        }
    }
})
    export const {setLoading,setMenuLoading,setClear,setPath}=loadSlice.actions
export default loadSlice.reducer