import React from "react";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <li>
      <div className="info">
        <div className="expense">{charge}</div>
        <div className="amount">{amount} €</div>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
        //   onClick={handleEdit}
        onClick={()=>handleEdit(id)}
        >
          Edit Btn
        </button>
        <button
          className="delete-btn"
          aria-label="delete button"
          onClick={()=>handleDelete(id)}
          >
          Delete Btn
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
