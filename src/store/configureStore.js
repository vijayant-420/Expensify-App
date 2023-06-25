import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const reducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
})


  const store = configureStore({
    reducer,
  })

export default store;