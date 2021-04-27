import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const expenseMonth = props.date.toLocaleString("default", { month: "long" });
  const expenseYear = props.date.getFullYear();
  const expenseDay = props.date.getDate();

  return (
    <div className="expense-item">
      <div>
        <div>{expenseMonth}</div>
        <div>{expenseYear}</div>
        <div>{expenseDay}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
