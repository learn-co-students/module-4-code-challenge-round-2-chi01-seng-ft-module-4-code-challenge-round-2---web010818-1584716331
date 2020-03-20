import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      storedTransactions: [],
      transactions: [],
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }
  componentDidMount(){
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
    .then(resp => resp.json())
    .then(transactions => {
      this.setState({
        storedTransactions: transactions,
        transactions: transactions
      })
    })
  }

  handleChange = (event) => {
    event.persist();
    const filteredTransactions = this.state.storedTransactions.filter(transaction => {
      if ((transaction.description.toLowerCase().includes(event.target.value.toLowerCase())) || (transaction.category.toLowerCase().includes(event.target.value.toLowerCase()))){
        return true
      } else return false
    });
    this.setState({
      transactions: filteredTransactions
    })
  }


 
  render() {

    return (
      <div>
        <Search  handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions} key={345353}/>
      </div>
    )
  }
}

export default AccountContainer
