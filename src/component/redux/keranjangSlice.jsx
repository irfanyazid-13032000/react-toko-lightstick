import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";


const initialState = {
  showKeranjang:false,
  isiKeranjang:[]
}



export const keranjangSlice = createSlice({
  name:"keranjang",
  initialState,
  reducers:{
    tampilKeranjang:(state) => {
      state.showKeranjang = true
    },
    tutupKeranjang:(state) => {
      state.showKeranjang = false
    },
    masukKeranjang:(state,action)=>{
      
      if (!state.isiKeranjang.some((isi)=>isi.id === action.payload.id)) {
        state.isiKeranjang.push(action.payload)
      }

    }
  }
})

export const {tampilKeranjang,tutupKeranjang,masukKeranjang} = keranjangSlice.actions
export default keranjangSlice.reducer