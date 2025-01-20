import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    value: any
}

const initialState: CounterState = {
    value: {},
}

export const productData = createSlice({
    name: 'allProduct',
    initialState,
    reducers: {
        getAllProductData: (state, action: PayloadAction<object>) => {
            state.value = action.payload
        },
    },
})

export const { getAllProductData } = productData.actions

export default productData.reducer