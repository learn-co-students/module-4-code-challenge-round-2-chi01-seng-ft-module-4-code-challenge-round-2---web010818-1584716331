import React from 'react'

const Search = props => {
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchValue}
        onChange={(event) => props.handleChange(event)}
      />
      <i className="circular search link icon" onClick={(event) => props.handleClick(event)}></i>
    </div>
  )
}

export default Search
