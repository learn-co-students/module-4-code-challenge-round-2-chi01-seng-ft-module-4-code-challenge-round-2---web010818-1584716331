import React from 'react'

const Search = (props) => {
  const {searchTerm, search}=props
  return (
    <div className="ui huge fluid icon input">
      <input
        type="text"
        //value={search}
        placeholder={"Search your Recent Transactions"}
        onChange={(event)=>{searchTerm(event)}}
      />
      <i className="circular search link icon"></i>
    </div>
  )
}

export default Search
