import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        CartAdd: (state, {payload}) => {
          const temItem = state.find(product => product.id === payload)
          if(!temItem) return [
            ...state, {id: payload, qtd: 1}
          ]
          else{
            temItem.qtd += 1
          }
        },

        CartRemove: (state, {payload}) => {
          const temItem = state.find(product => product.id === payload)

          if(temItem){
            return state.filter(item => item.id !== payload)
          }
        } ,

        AddQtd: (state, {payload}) => {
          state = state.map(item => {
            if(item.id === payload.id) item.qtd += payload.qtd
            return item
          })
        },
    }
})

export const {CartAdd, CartRemove, AddQtd} = cartSlice.actions 

export default cartSlice.reducer