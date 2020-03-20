import React from 'react'

const Transaction = (props) => {
  const {trans}=props
  return (
    <tr>
      <td>{trans.posted_at}</td>
  <td>{trans.description}</td>
      <td>{trans.category}</td>
      <td>{trans.amount}</td>
    </tr>
  )
}

export default Transaction
