import React, { useState } from "react";
import Card from '../UI/Card';
import ExpenseItem  from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter";
// import Card from './Card';
import './Expenses.css';
const Expenses = (props) => {
const [filterYear, setFilterYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilterYear(selectedYear);
  }
  
  return ( 
    <div>
      
    
  <Card className='expenses'>
    <ExpensesFilter selected={filterYear} onChangeFilter ={filterChangeHandler}/>
    <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem>
  </Card>
  </div>
)}

export default Expenses;