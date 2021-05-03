import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const defaultState = { title: "", amount: "", date: "" };
  const [userInput, setUserInput] = useState(defaultState);
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState("");
  // const [date, setDate] = useState("");
  const inputChangeHandler = (event, type) => {
    if (type === "title")
      setUserInput((prevState) => {
        return { ...prevState, title: event.target.value };
      });
    else if (type === "amount")
      setUserInput((prevState) => {
        return { ...prevState, amount: event.target.value };
      });
    else
      setUserInput((prevState) => {
        return { ...prevState, date: new Date(event.target.value) };
      });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(userInput);
    setUserInput(defaultState);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={(e) => inputChangeHandler(e, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.amount}
            min="0.01"
            step="0.01"
            onChange={(e) => inputChangeHandler(e, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.date}
            min="2021-05-01"
            max="2021-05-31"
            onChange={(e) => inputChangeHandler(e, "date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
