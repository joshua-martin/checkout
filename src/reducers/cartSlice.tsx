import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

export interface DiscountItem {
    amount?: number
    code?: string
}
export interface DeliveryItem {
    id: number
    title: string
    price: number
    default: boolean
}
export interface CartItem {
    id: number
    title: string
    seller: string
    price: number
    image: string
    quantity: number
    delivery: DeliveryItem[]
}
export interface CartState {
    items: CartItem[]
    totalItems: number
    subtotal: number
    delivery: number
    total: number
    discount: DiscountItem
}
const initialState: CartState = {
    items: [],
    totalItems: 0,
    subtotal: 0,
    delivery: 0,
    total: 0,
    discount: {}
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        toggleQuantity: (state, actions) => {
            const cartItem = state.items.find((i) => i.id === actions.payload.item.id)
            const quantity = actions.payload.quantity

            if (quantity < 1) {
                cartSlice.caseReducers.removeItem(state, actions)
            } else {
                cartItem.quantity = quantity
            }
            cartSlice.caseReducers.updateTotals(state)
        },
        addItem: (state, actions) => {
            const quantity = actions.payload.quantity
            const item = actions.payload.item
            const cartItem = state.items.find((i) => i.id === item.id)

            if (cartItem) {
                if (quantity === 0) {
                    cartSlice.caseReducers.removeItem(state, actions)
                }

                cartItem.quantity += quantity
            } else {
                const combinedItem = {
                    ...item,
                    quantity: quantity
                }

                state.items.push(combinedItem)
            }

            cartSlice.caseReducers.updateTotals(state)
        },
        removeItem: (state, actions) => {
            const item = actions.payload.item
            state.items = state.items.filter((i) => i.id !== item.id)

            cartSlice.caseReducers.updateTotals(state)
        },
        toggleDiscountCode: (state, actions) => {
            const discount = actions.payload

            if (!discount) {
                state.discount = {}
            } else {
                const discountType = discount.type
                const discountAmount =
                    discountType === 'percentage'
                        ? state.total * (1 - (1 - discount.discount / 100))
                        : discount.discount
                state.discount.amount = discountAmount
                state.discount.code = discount.code
            }

            cartSlice.caseReducers.updateTotals(state)
        },
        toggleDelivery: (state, actions) => {
            const cartItem = state.items.find((i) => i.id === actions.payload.item)

            cartItem.delivery.filter((d) =>
                d.id === actions.payload.deliveryOption.id
                    ? (d.default = true)
                    : (d.default = false)
            )
            cartSlice.caseReducers.updateTotals(state)
        },
        updateTotals: (state) => {
            let total = 0
            let subtotal = 0
            let delivery = 0
            let totalItems = 0
            const discount = state.discount.amount ?? 0

            state.items.map((i) => {
                totalItems += i.quantity
                subtotal += i.price * i.quantity
                const activeDeliveryItem = i.delivery.filter((d) => d.default === true)[0]

                if (activeDeliveryItem.price > 0) {
                    delivery += activeDeliveryItem.price * i.quantity
                }
                return true
            })
            total = subtotal - discount + delivery

            state.total = total
            state.subtotal = subtotal
            state.delivery = delivery
            state.totalItems = totalItems
        }
    }
})

export const { toggleQuantity, addItem, removeItem, toggleDiscountCode, toggleDelivery } =
    cartSlice.actions

export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
