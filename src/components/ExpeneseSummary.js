import React from 'react';
import { Link } from 'react-router-dom';

export const ExpensesSummary = () => {

  return (
    <div className="page-header">
      <div className="content-container">
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

export default ExpensesSummary;
