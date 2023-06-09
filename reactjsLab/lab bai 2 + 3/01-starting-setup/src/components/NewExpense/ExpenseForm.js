import React, { useState } from "react";
import './ExpenseForm.css'

const ExpenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredMount] = useState('');
   const [enteredData, setEnteredData] = useState('');
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredData: '',
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // })
    //////ok
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value};
    // })

    // } 
  };

  const amountChangeHandler = (event) => {
    setEnteredMount(event.target.value)
    // setUserInput({
    //   enteredAmount: event.target.value,
    // })
  }

  const dataChangeHandler = (event) => {
    setEnteredData(event.target.value)
    // setUserInput({
    //   enteredData: event.target.value,
    // })
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredData)
    }

    props.onSaveExpanseData(expenseData);
    setEnteredTitle('');
    setEnteredMount('');
    setEnteredData('');
  }




  return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Amount</label>
        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
      </div>
      <div className="new-expense__control">
        <label>Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" value={enteredData} onChange={dataChangeHandler}/>
      </div>
    </div>
    <div className="new-expense_actions">
      <button type="submit" >Add Expense</button>
    </div>
  </form>
}
export default ExpenseForm;