import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showKeranjang:false,
  isiKeranjang:[],
  totalSemuaHarga:0
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
        state.isiKeranjang.push({...action.payload,qty:1,totalHarga:action.payload.harga})
        state.totalSemuaHarga += action.payload.harga
      }
    },
    tambahQty:(state,action)=>{
      state.totalSemuaHarga += action.payload.harga
      state.isiKeranjang = state.isiKeranjang.map((isi)=>{
        return isi.id == action.payload.id ? {...isi,qty:isi.qty+1,totalHarga:isi.harga*(isi.qty+1)} : isi
      })
    },
    kurangQty:(state,action)=>{
      state.totalSemuaHarga -= action.payload.harga
      state.isiKeranjang = state.isiKeranjang.map((isi)=>{
        if(isi.qty <= 0){
          alert("tidak boleh dong")
          return isi
        }
        return isi.id == action.payload.id ? {...isi,qty:isi.qty-1,totalHarga:isi.harga*(isi.qty-1)} : isi
      })
    },
    deleteProduct:(state,action) => {
      state.isiKeranjang = state.isiKeranjang.filter((isi)=>{return isi.id !== action.payload.id})
      state.totalSemuaHarga = state.isiKeranjang.reduce((acc,curVal)=>{return acc+curVal.totalHarga},0)
    },
    checkOut:(state)=>{
      state.isiKeranjang = []
      state.showKeranjang = false
      state.totalSemuaHarga = 0
    }

  }
})

export const {tampilKeranjang,tutupKeranjang,masukKeranjang,tambahQty,kurangQty,deleteProduct,checkOut} = keranjangSlice.actions
export default keranjangSlice.reducer