import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: any
}

const initialState: CounterState = {
    value: [] as any,
}

export const addToCart = createSlice({
    name: 'carts',
    initialState,
    reducers: {
        addtoCartProduct: (state, action: PayloadAction<object>) => {
            state.value = action.payload
            console.log('state: ', state);
            console.log('action.payload: ', action.payload);
        },
    },
})

export const { addtoCartProduct } = addToCart.actions

export default addToCart.reducer