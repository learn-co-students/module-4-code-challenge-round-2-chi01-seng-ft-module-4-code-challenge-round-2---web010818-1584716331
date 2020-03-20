import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'
const API ="https://boiling-brook-94902.herokuapp.com/transactions"

class AccountContainer extends Component {

  constructor() {
    super()
    this.state= {
      transactions: transactions,
      searchTerm: ""
    }
  }

  componentDidMount(){
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          transactions: data
        })
      })
      .catch(err => console.log(err))
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  renderFilteredTrans = () => {
    // // using the searchTerm, query the transactions and conditionally render them to the screen. Using filter
    const lowerSearchTerm = this.state.searchTerm.toLowerCase()
    const filteredTrans = this.state.transactions.filter(trans => (trans.category.toLowerCase().includes(lowerSearchTerm) || trans.description.toLowerCase().includes(lowerSearchTerm)))
    return filteredTrans
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} searchTerm={this.state.searchTerm} />
        <TransactionsList renderTrans={this.renderFilteredTrans}/>
      </div>
    )
  }
}

export default AccountContainer
