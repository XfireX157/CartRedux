import {configureStore} from '@reduxjs/toolkit'
import listSlice from './Reducers/list'
import cartSlice from './Reducers/Cart'

const store = configureStore({
    reducer: {
        list: listSlice,
        cart: cartSlice
    }
})

export default store