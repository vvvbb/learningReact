import React from "react";

const ExpenseForm = ({
  charge,
  amount,
  handleSubmit,
  handleAmount,
  handleCharge,
  edit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="py-3 w-50 mx-auto">
      <div className="form-row px-5 ">
        <div className="form-group col">
          <label htmlFor="charge" className="text-uppercase">
            Charge
          </label>
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
          <label htmlFor="amount" className="text-uppercase">
            Amount
          </label>
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
      <button className="btn  btn-light " type="submit">
        {edit ? "EDIT" : "SUBMIT"}
      </button>
    </form>
  );
};

export default ExpenseForm;
