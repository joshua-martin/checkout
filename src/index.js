import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import App from './App'

import { store } from './app/store'
import { Provider } from 'react-redux'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache()
})

const root = ReactDOM.createRoot(document.querySelector('.checkout-app'))

root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </ApolloProvider>
)
