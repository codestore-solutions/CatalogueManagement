import {configureStore} from '@reduxjs/toolkit'
import ErrorReducer from './Reducers/ErrorReducer';

const store = configureStore({
    reducer:ErrorReducer
})

export default store;