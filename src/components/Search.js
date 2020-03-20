import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        onKeyDown= { (event) => props.handleChange(event)}
        placeholder={"Search your Recent Transactions"}
        value={props.searchData}
      
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
