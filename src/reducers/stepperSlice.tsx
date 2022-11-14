import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface Step {
    value: number
}

const initialState: Step = {
    value: 0
}

export const stepperSlice = createSlice({
    name: 'step',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    }
})

export const { increment, decrement } = stepperSlice.actions

export const selectStep = (state: RootState) => state.step.value

export default stepperSlice.reducer
