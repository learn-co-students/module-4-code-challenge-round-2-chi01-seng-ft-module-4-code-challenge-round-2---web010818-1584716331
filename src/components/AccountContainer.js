import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'




class AccountContainer extends Component {

    constructor(){
      super()
      this.state = {
        transactionsList: [],
        searchTerm: ''



  }
}

componentDidMount() {
  fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
    .then(res => res.json())
    .then(transactionsList => this.setState({ transactionsList }));
};

handleChange = event => {
  this.setState({ searchTerm: event.target.value })
}


  render() {
    const desiredTransaction = this.state.transactionsList.filter(transaction =>
      transaction.description.includes(this.state.searchTerm) || transaction.category.includes(this.state.searchTerm)
    )

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactionsList={desiredTransaction} />
      </div>
    )
  }
}

export default AccountContainer
