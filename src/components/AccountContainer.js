import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: transactions,
      searchValue: ' '
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactionData => 
        this.setState({
          transactions: transactionData,
          matchingTransactions: []
        }))
  }

  handleChange = (event) => {
    this.setState({
      searchValue: event.target.value
    })
    // console.log(this.state.searchValue)
  }


  //take this.state.searchvalue
  //map through transaction descriptions to see if any of them include this.state.searchvalue
  //map through transaction categories to see if any of them include this.state.searchvalue
  //if* so, update state to display only those that match
  //make sure what is displayed in transactionsList matches "matchingTransactions" and not just "Transactions"

  handleClick = () => {
    console.log(this.state.transactions)
    const filtered = this.state.transactions.filter((transaction) => {
      return transaction.description === this.state.searchValue
    })
    this.setState({
      matchingTransactions: filtered
    })
    console.log(filtered)
  }



  render() {

    return (
      <div>
        <Search transactionsData={this.state.transactions} handleChange={this.handleChange} handleClick={this.handleClick}/>
        <TransactionsList transactionsData={this.state.transactions} handleChange={this.handleChange} handleClick={this.handleClick}/>
      </div>
    )
  }
}

export default AccountContainer
