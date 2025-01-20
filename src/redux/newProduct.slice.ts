import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: any
}

const initialState: CounterState = {
    value: {},
}

export const productData = createSlice({
    name: 'newProduct',
    initialState,
    reducers: {
        getNewProductData: (state, action: PayloadAction<object>) => {
            state.value = action.payload
        },
    },
})

export const { getNewProductData } = productData.actions

export default productData.reducer