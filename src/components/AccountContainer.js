import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ''
    }
  }


  componentDidMount = () => {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactionData => {
      this.setState({
        transactions: transactionData
      })
    })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  matchingTransactions = () => {
    return this.state.transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) || 
      transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <TransactionsList transactions={this.matchingTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
