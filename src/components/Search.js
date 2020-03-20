import React from 'react'

const Search = (props) => {
  return (
    <div className="ui huge fluid icon input">
      <form>
        <label>Sort:</label>
        <select onChange={props.sort}>
          <option value=''></option>
          <option value="amount">Amount</option>
          <option value="category">Category</option>
        </select>
      </form>
      <input onChange={props.handleChange}
        type="text"
        placeholder={"Search your Recent Transactions"}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
