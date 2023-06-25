import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";

const AddExpensePage = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Expense</h1>
        </div>
      </div>
      <div className="content-container">
        <ExpenseForm
          onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default connect()(AddExpensePage);
