import React from "react";

const ExpenseForm = ({
  charge,
  amount,
  handleSubmit,
  handleAmount,
  handleCharge,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col">
          <label htmlFor="charge">charge</label>
          <input
            type="text"
            className="form-control"
            id="charge"
            name="charge"
            placeholder="charge"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group col">
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="amount"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button className="btn  btn-outline-light" type="submit">
        {edit ? "edit":"submit"}
      </button>
    </form>
  );
};

export default ExpenseForm;
