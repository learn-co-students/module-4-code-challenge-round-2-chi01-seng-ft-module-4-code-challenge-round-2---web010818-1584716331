import React from 'react'
// import TransactionList from './TransactionsList'

const Transaction = (props) => {
  // console.log(props)
  // console.log('hhh')
  // const { posted_at, description, category, amount } = props

  return (
    <tr>
      <td>{props.transaction.posted_at}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  )
}

export default Transaction
