import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

    this.state ={
      transactions: [],
      filtered: []
    }

  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(data => this.setState({
      transactions: data,
      filtered: data
    }))
  }

 

  handleChange = (e) => {
    
   
    const newTransactions = this.state.transactions.filter(trans => {
      
      return trans.description.toLowerCase().includes(e.target.value.toLowerCase()) || trans.category.toLowerCase().includes(e.target.value.toLowerCase())
     
    })
    this.setState({
      filtered: newTransactions
    })
    
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList  transactions={this.state.filtered} />
      </div>
    )
  }
}

export default AccountContainer
