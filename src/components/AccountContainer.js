import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state={
      transactions: [],
      userInput: ""
    }

    this.handleChange = this.handleChange.bind(this);
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }


// updateInput(event){
//   this.setState({username : event.target.value})
//   }

  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then( resp => resp.json() )
    .then( transData => this.setState({
      transactions: transData
    }))
  }

  // handleChange(event) {
  //   // your code here
  //   // change this to ES6
  // }

  handleChange = (event) => {
    console.log(event.target)

    // need conditional
    // need to filter through description and category
    // map through description values and map through category values
    // if value characters match with character of userInput, then return those values

    this.setState({
      userInput: event.target.value}
    );

    // map and include the following

    // this.state.transactions.map(transaction => {
    //     if (this.state.userInput === this.state.transaction.description || this.state.transaction.category){
    //     return console.log(transaction)
    //   }
    // })
    this.state.transactions.map( transaction => {
      if (transaction.description.startsWith(this.state.userInput || transaction.category.startsWith(this.state.userInput))){
        return console.log(transaction)
      }
    })

    

  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} userInput={this.state.userInput}/>
        <TransactionsList key={transactions.id} transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
