import React from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ExpenseItem = ({ expense, handleEdit, handleDelete }) => {
  const { id, charge, amount } = expense;
  return (
    <li className="list-unstyled text-center d-flex justify-content-center align-items-center my-3 w-50 mx-auto py-3 bg-light shadow-sm  rounded">
      <h5 className="text-capitalize m-0 p-0">
        <span className="expense">{charge} </span>
        {""}: <span className="amount">{amount} €</span>
      </h5>
      <button
        className="edit-btn btn btn-info mx-3 "
        aria-label="edit button"
        //   onClick={handleEdit}
        onClick={() => handleEdit(id)}
      >
        <FaEdit />
      </button>
      <button
        className="delete-btn btn btn-info"
        aria-label="delete button"
        onClick={() => handleDelete(id)}
      >
        <FaTrashAlt />
      </button>
      {/* <br /> */}
    </li>
  );
};

export default ExpenseItem;
