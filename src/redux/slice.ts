import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: any
}

const initialState: CounterState = {
    value: {},
}

export const productData = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getProductData: (state, action: PayloadAction<object>) => {
            state.value = action.payload
        },
    },
})

export const { getProductData } = productData.actions

export default productData.reducer