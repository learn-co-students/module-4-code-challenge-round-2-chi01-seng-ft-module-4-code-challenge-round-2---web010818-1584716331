import React from 'react'
import TransactionsList from './TransactionsList'

class Search extends React.Component {

  render(){
  return (
    <div className="ui huge fluid icon input">
      <input onKeyUp={this.props.handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}
}

export default Search
