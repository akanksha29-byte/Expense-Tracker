import { useState } from "react";
import "./style.css";

export default function App() {
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);
  const [transaction, setTransaction] = useState([]);

  //method to create current date and time
  const createDate = () => {
    let date = new Date();
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  };

  //method to add expense
  const handleAddExpense = () => {
    if (expense > 0) {
      setTransaction([
        ...transaction,
        { timeAndDate: createDate(), expense: expense, status: "Added" },
      ]);
      setTotal(total + parseInt(expense));
      setExpense(0);
    }
  };

  //method to remove expense
  const handleRemoveExpense = () => {
    if (total >= expense && expense > 0) {
      setTransaction([
        ...transaction,
        { timeAndDate: createDate(), expense: expense, status: "Removed" },
      ]);
      setTotal(total - parseInt(expense));
      setExpense(0);
    }
  };

  return (
    <div className="App">
      <h3 className="title">Expense Tracking Basic</h3>
      <div className="container-add-expense">
        <div className="total-expense">{`Balance : ${total}`}</div>
        <input
          type="number"
          placeholder="Enter expense"
          value={expense}
          onChange={(e) => {
            setExpense(e.target.value);
          }}
        />
        <div className="container-button">
          <button onClick={handleAddExpense}>Add</button>
          <button onClick={handleRemoveExpense}>Remove</button>
        </div>
      </div>
      <ul className="container-transaction">
        <h4>Transaction</h4>
        {transaction.map((item, index) => (
          <li
            className="list-item"
            key={index}
          >{`${item.timeAndDate} ${item.expense} - ${item.status}`}</li>
        ))}
      </ul>
    </div>
  );
}
