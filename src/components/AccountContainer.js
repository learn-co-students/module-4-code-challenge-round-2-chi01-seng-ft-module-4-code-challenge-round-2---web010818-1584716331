import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

const API = 'https://boiling-brook-94902.herokuapp.com/transactions'
class AccountContainer extends Component {

  constructor() {
    super()
    this.state ={
      transactions: [],
      search: ''
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }

  handleChange = (event) => {
    // your code here
    this.setState({
      search: event.target.value
    // console.log('--------', event.target)
  })
}

  filterTransactions = () => {
    return this.state.transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()) || 
      transaction.category.toLowerCase().includes(this.state.search.toLowerCase()))
  }


  render() {
    const { search } = this.state
  
    return (
      <div>
        <Search handleChange={this.handleChange}  search={search}/>
        <TransactionsList transactions={this.filterTransactions()} />
      </div>
    )
  }
}

export default AccountContainer
