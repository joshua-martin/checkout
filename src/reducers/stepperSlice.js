import { createSlice } from '@reduxjs/toolkit'

export const stepperSlice = createSlice({
    name: 'step',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = stepperSlice.actions

export const selectStep = state => state.step.value

export default stepperSlice.reducer