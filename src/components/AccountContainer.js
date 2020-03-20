import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
//import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  constructor() {
    super()
    this.state={
      transactions: [],
      searchTerm: "",
      originalTrans: []
    }
    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API

  }
componentDidMount(){
  console.log(this.state.transactions)
  fetch('https://boiling-brook-94902.herokuapp.com/transactions')
  .then(resp=>resp.json())
  .then(data=>{
    this.setState({
      transactions: data,
      originalTrans: data
    })
  })
}
  handleChange=(event)=> {
    //event.persist()
   let term= event.target.value
   console.log(term)
  this.setState({
     searchTerm: term
   }) 
   if(this.state.searchTerm === ""){
      this.setState({
        transactions: this.state.originalTrans
      })
   }
let descFiltered= this.state.transactions.filter(trans=>{
  return trans.description.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1})
console.log('FILTERED',descFiltered)
let catFiltered= this.state.transactions.filter(trans=>{
  return trans.category.toLowerCase().indexOf(this.state.searchTerm.toLowerCase()) !== -1})
let bothCombined= [...new Set([...catFiltered,...descFiltered])]
console.log('FILTERED both combined',bothCombined)
  if(this.state.searchTerm === ""){
    this.setState({
      transactions: this.state.originalTrans
    })
 }
  this.setState({
    transactions: bothCombined
  })
 
}
  render() {

    return (
      <div>
        <Search searchTerm={this.handleChange} search={this.state.searchTerm}/>
        <TransactionsList transactions={ this.state.searchTerm.length > 0 ? this.state.transactions : this.state.originalTrans}/>
      </div>
    )
  }
}

export default AccountContainer
