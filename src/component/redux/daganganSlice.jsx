import { createSlice } from "@reduxjs/toolkit";
import newjeans from "../../assets/img/product/newjeans.jpg"
import yoasobi from "../../assets/img/product/yoasobi.jpg"
import ive from "../../assets/img/product/ive.jpg"
import lesserafim from "../../assets/img/product/lesserafim.jpg"

const initialState = {
  allDagangan:[
    {id:1,nama:"lighstick newjeans",harga:1000000,deskripsi:"newjeans mantab",image:newjeans},
    {id:2,nama:"lighstick yoasobi",harga:908900,deskripsi:"yoasobi mantab",image:yoasobi},
    {id:3,nama:"lighstick IVE",harga:308900,deskripsi:"IVE mantab",image:ive},
    {id:4,nama:"lighstick Lesserafim",harga:381900,deskripsi:"le sserafim mantab",image:lesserafim},
  ],
  show:false,
  selectedProduct:{},
}

export const daganganSlice = createSlice({
  name:"dagangan",
  initialState,
  reducers:{
    hapus:(state,action)=>{
      state.allDagangan = state.allDagangan.filter((dagangan)=>dagangan.id !== action.payload)
    },
    show:(state)=>{
      state.show = true
    },
    unshow:(state)=>{
      state.show = false
    },
    select:(state,action)=>{
      state.selectedProduct = state.allDagangan.find((item)=>{return item.id == action.payload})
    }



  }
})

export const {hapus,show,unshow,select} = daganganSlice.actions
export default daganganSlice.reducer