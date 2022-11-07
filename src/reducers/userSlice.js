import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loggedIn: false,
        user: {}
    },
    reducers: {
        login: (state, action) => {
            state.loggedIn = true
            state.user = action.payload[0]
        },
        logout: (state) => {
            state.loggedIn = false
            state.user = {}
        }
    }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state) => state.user

export default userSlice.reducer
