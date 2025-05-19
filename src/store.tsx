import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer 
        //telling redux that i have a slice of store named cart
        // and its state will be managed by a educer named cartReducer
    },
})


//Type of my entire Redux state tree
export type RootState = ReturnType<typeof store.getState>

//Type of my dispatch function
export type AppDispatch = typeof store.dispatch