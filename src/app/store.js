import { configureStore } from '@reduxjs/toolkit'

import stepperReducer from '../reducers/stepperSlice'
import userReducer from '../reducers/userSlice'
import cartReducer from '../reducers/cartSlice'

import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    step: stepperReducer,
    user: userReducer,
    cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})
