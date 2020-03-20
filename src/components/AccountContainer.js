import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    this.state= {
      transactions: transactions,
      search: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(transactions => this.setState({
        transactions: transactions
      }))
  }

  handleChange = (event) => {
    console.log(event.target.value)
    const searchState = event.target.value
    this.setState({
      search: event.target.value
      })
    this.filteredTransactions(searchState)
  }
  
  filteredTransactions = (search) => {
    const filtered = this.state.transactions;
    // Realized at the end of time why this wasn't working.
    // Transactions state was being set according to search string, so I should have created a separate filtered state
    // and conditionally rendered that state if the value of the search state was not an empty string.
    this.setState({
      transactions: filtered.filter(transaction => {
        return transaction.description.toLowerCase().includes(search) || transaction.category.toLowerCase().includes(search)
      })
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange}/>
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
