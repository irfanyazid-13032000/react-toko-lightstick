import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showKeranjang:false
}

export const keranjangSlice = createSlice({
  name:"keranjang",
  initialState,
  reducers:{
    tampilKeranjang:(state) => {
      // console.log("fungsi tampil keranjang");
      state.showKeranjang = true
    },
    tutupKeranjang:(state) => {
      state.showKeranjang = false
    }
  }
})

export const {tampilKeranjang,tutupKeranjang} = keranjangSlice.actions
export default keranjangSlice.reducer