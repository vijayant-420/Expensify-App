import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import numeral from 'numeral';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
  <div className="list-item">
  <div>
  <h3 className="list-item__title">{description}</h3>
  
  <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
  
  </div>
  <button className="button" onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  <h3 className="list-item__data">{numeral(amount / 100).format('0,0.00')}</h3>
  
  </div>
);

export default connect()(ExpenseListItem);
