import {configureStore} from '@reduxjs/toolkit';
import CartReducer from '../reducers/CartReducer';

export default configureStore({
    reducer:{
        cart:CartReducer,
    }
})