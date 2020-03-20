import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import Transaction from './Transaction'
// import {transactions} from '../transactionsData'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions'

class AccountContainer extends Component {
  constructor() {
    super()
    this.state = {
      transactions: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          transactions: data
        })
      })
  }

  handleChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  filteredSearch = () => {
    return this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        <TransactionsList transactions={this.filteredSearch()}/>
      </div>
    )
  }
}

export default AccountContainer
