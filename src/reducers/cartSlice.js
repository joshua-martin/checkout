import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: {},
        subtotal: 0,
        delivery: 0,
        total: 0,
        discount: {}
    },
    reducers: {
        toggleQuantity: (state, actions) => {

        },
        addItem: (state, actions) => {

        },
        removeItem: (state, actions) => {

        },
        toggleDiscountCode: (state, actions) => {

        },
        toggleDelivery: (state, actions) => {

        }
    }
})

export const { toggleQuantity, addItem, removeItem, toggleDiscountCode, toggleDelivery } = cartSlice.actions

export const selectCart = state => state.cart

export default cartSlice.reducer