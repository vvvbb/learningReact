import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./Calculator.scss";

import ExpenseList from "./ExpenseList";
import ExpenseForm from "./ExpenseForm";
import Alert from "./Alert";

const initialExpenses = [
  { id: uuidv4(), charge: "house", amount: 1200 },
  { id: uuidv4(), charge: "car", amount: 350 },
  { id: uuidv4(), charge: "water", amount: 30 },
];

// console.log(initialExpenses);

export default function Calculator() {
  const [expenses, setExpense] = useState(initialExpenses);
  const [charge, setCharge] = useState("");
  const [amount, setAmount] = useState("");
  const [alert, setAlert] = useState({ show: false });
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(0);

  const handleCharge = (e) => {
    console.log(`charge : ${e.target.value}`);
    setCharge(e.target.value);
  };
  const handleAmount = (e) => {
    console.log(`amount : ${e.target.value}`);
    setAmount(e.target.value);
  };
  const handleSubmit = (e) => {
    console.log(e);
    console.log(e.target.value);
    e.preventDefault();

    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map((item) => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpense(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuidv4(), charge, amount };
        setExpense([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }

      setCharge("");
      setAmount("");
    } else {
      handleAlert({
        type: "warning",
        text: "can't be empty value or amount should be bigger than zero",
      });
    }
  };
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 3000);
  };
  const clearAllItems = () => {
    setExpense([]);
    handleAlert({ type: "danger", text: `ALL items deleted` });
  };
  const handleDelete = (id) => {
    console.log(`handleDelete ${id}`);
    let tempExpenses = expenses.filter((item) => item.id !== id);
    setExpense(tempExpenses);
    handleAlert({ type: "warning", text: `item deleted` });
  };
  const handleEdit = (id) => {
    console.log(`handleEdit ${id}`);
    let expense = expenses.find((item) => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      <section className="calculator">
        <h1 className="py-3">Calculator Project</h1>
        {alert.show && <Alert type={alert.type} text={alert.text} />}
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleAmount={handleAmount}
          handleCharge={handleCharge}
          handleSubmit={handleSubmit}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          clearAllItems={clearAllItems}
        />

        <h4 className="text-uppercase rounded py-3 w-50 mx-auto mt-3">
          total : {""}
          <u>
            {expenses.reduce((acc, curr) => {
              return (acc += parseInt(curr.amount));
            }, 0)}{" "}
            €
          </u>
        </h4>
      </section>
    </>
  );
}
