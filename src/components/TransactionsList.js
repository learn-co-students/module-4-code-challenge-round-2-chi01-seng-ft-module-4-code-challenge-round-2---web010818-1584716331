import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {

  const renderTransactions = (props) => {
      return props.transactions.map(transaction => {
        return <Transaction key={transaction.id} transaction={transaction}/>
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

        {renderTransactions(props)}

      </tbody>
    </table>
  )
}

export default TransactionsList
