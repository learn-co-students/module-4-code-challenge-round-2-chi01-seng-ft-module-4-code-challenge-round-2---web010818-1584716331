import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      search: '', 
      sort: ''
    }

  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(data => this.setState({
        transactions: data
      }))
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  fiterTransactions = () => {
    let transactions = ''
    if (this.state.sort === 'amount') {
      transactions = this.state.transactions.sort(function(a, b){return a.amount-b.amount})
    }
    if (this.state.sort === 'category') {
      transactions = this.state.transactions.sort(function(a, b) {
        const nameA = a.category.toUpperCase();
        const nameB = b.category.toUpperCase();
        return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
      });}
    transactions = this.state.transactions.filter(transaction => {
        const category = transaction.category.toLowerCase()
        const description = transaction.description.toLowerCase()
        const search = this.state.search.toLowerCase()
        return category.includes(search) || description.includes(search)
     })
    return transactions
  }

  sortButton = (event) => {
    this.setState({
      sort: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Search sort={this.sortButton} handleChange={this.handleChange}/>
        <TransactionsList transactions={this.fiterTransactions()}/>
      </div>
    )
  }
}

export default AccountContainer
