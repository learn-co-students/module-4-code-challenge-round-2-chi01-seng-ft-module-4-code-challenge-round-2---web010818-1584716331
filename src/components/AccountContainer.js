import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'


const API = "https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor() {
    super()
    this.state={
      transactions: []
  }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  handleChange = (event) => {
    console.log(event.target.value)
    const searchArr = this.state.transactions.filter(transaction =>{
      if(transaction.description.includes(event.target.value) || transaction.category.includes(event.target.vaue)){return transaction}
      else{return null}
    })
      
    // if else(transaction.category.includes(event.target.vaue)) {return transaction}
    // else {return null}
  //   if (condition1)
  //   statement1
  // else if (condition2)
  //   statement2
  // else if (condition3)
  //   statement3
  // ...
  // else
  //   statementN
      
      // () || )

    // console.log(this.state.transactions)

    this.setState({
      transactions: searchArr
    })
  }
  // const result = words.filter(word => word.length > 6);
  // const found = array1.find(element => element > 10);




  render() {
    // console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
