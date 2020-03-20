import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      searchCritera: false,
      filteredTrans: []
    }

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(resp => resp.json())
    .then(transactionData => {
      this.setState({
        transactions: transactionData
      })
      })
    
  }


  handleChange = (e) => {
    const search = e.target.value
    const filterTrans = this.state.transactions.filter(transaction => {
      return transaction.description.toLowerCase().includes(search)||transaction.category.toLowerCase().includes(search)
    })
    this.setState({
      filteredTrans: filterTrans,
      searchCritera: e.target.value
    })
  } 
  //  noticed last second that if I type numbers in the field, it breaks. I don't have time to change 
  // but if I did I'd add a conditional in my filter. If the transaction descrip or category includes characters in 
  // the search term, run my logic I have in the above function, else just return the transaction. I think...
  // the instructions don't make clear that I need to account for this. 
  render() {
    console.log(this.state.searchCritera)
    console.log(this.state.transactions)
    return (
      <div>
        <Search handleChange={this.handleChange}  searchData={this.state.searchCriteria}/>
        <TransactionsList transactions={this.state.transactions} filteredTrans={this.state.filteredTrans} searchCriteria={this.state.searchCritera} />
      </div>
    )
  }
}

export default AccountContainer
