import React from "react";
import Item from "./ExpenseItem";

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearAllItems }) => {
  return (
    <>
      <ul className="p-0">
        {expenses.map((expense) => {
          return (
            <Item
              key={expense.id}
              expense={expense}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn btn-sm btn-outline-danger text-uppercase my-3" onClick={clearAllItems}>
          clear expenses
        </button>
      )}
    </>
  );
};

export default ExpenseList;
