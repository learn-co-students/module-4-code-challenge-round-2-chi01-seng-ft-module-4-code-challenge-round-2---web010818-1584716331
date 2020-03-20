import React from 'react'
import Transaction from './Transaction'


const TransactionsList = props => {

  const renderTransactions = () => {
    // console.log(props)
    return props.transactionsData.map(transaction => {
      return <Transaction transaction={transaction} handleChange={props.handleChange} handleClick={props.handleClick}/>
    })
  }


  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {renderTransactions()}

      </tbody>
    </table>
  )
}

export default TransactionsList
