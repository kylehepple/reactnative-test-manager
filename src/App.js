import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import firebase from 'firebase';
import reducers from './reducers';

import LoginForm from './components/LoginForm';
import { Header } from './components/common';

class App extends Component {

    componentDidMount() {

        firebase.initializeApp({
            apiKey: 'AIzaSyBFUD4_LohsMlJg8qyEPrSRKtTe1DL3rXg',
            authDomain: 'manager-56458.firebaseapp.com',
            databaseURL: 'https://manager-56458.firebaseio.com',
            projectId: 'manager-56458',
            storageBucket: 'manager-56458.appspot.com',
            messagingSenderId: '736598959323'
        });
    }

    render() {

        const store = createStore(
            reducers,
            {},
            applyMiddleware(ReduxThunk)
        );

        return (
            <Provider store={store}>
                <View>
                    <Header headerText="Login" />
                    <LoginForm />
                </View>
            </Provider>
        );

    }

}

export default App;