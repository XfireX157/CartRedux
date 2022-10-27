import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        CartAdd: (state, {payload}) => {
            const temItem = state.find(product => product.id === payload)
        
          if(!temItem) return [
            ...state, {payload}
          ]
          return state.filter(item => item.id !== payload)
        }
    }
})

export const {CartAdd} = cartSlice.actions 

export default cartSlice.reducer