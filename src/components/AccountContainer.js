import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state = {
      transactions: [],
      filter: null
    }
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

  handleChange = (event) => {
    const filter = event.target.value

    const updatedTransArray = this.state.transactions.filter(trans => {
      if(trans.description.includes(filter)){
        return trans
      } else if(trans.category.includes(filter)){
        return trans
      } else null
    })
    // console.log(updatedTransArray)
    //I am getting the correct updated Array in console, but it is not re-rendering
    //TransactionsList props remains unaltered, but should reflect UpdatedTransArray

    //Finally realized that I misspelled transactions in setState below
    //No time left, but the next step would be to re-render filtered transactions when input gets deleted

    this.setState({
      transactions: updatedTransArray
    })
  }

  render() {

    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.state.transactions}/>
      </div>
    )
  }
}

export default AccountContainer
