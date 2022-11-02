import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

import { store } from './app/store'
import { Provider } from 'react-redux'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const root = ReactDOM.createRoot(document.querySelector('.checkout-app'));
let persistor = persistStore(store);

const client = new ApolloClient({
    uri: 'https://flyby-gateway.herokuapp.com/',
    cache: new InMemoryCache(),
});

root.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </ApolloProvider>
);
