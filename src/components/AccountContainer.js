import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import { transactions } from "../transactionsData";

class AccountContainer extends Component {
  constructor() {
    super();

    this.state = {
      transactions: [],
      searchTerm: ""
    };

    // get a default state working with the data imported from TransactionsData
    // use this to get the functionality working
    // then replace the default transactions with a call to the API
  }

  componentDidMount = () => {
    fetch("https://boiling-brook-94902.herokuapp.com/transactions")
      .then(resp => resp.json())
      .then(tData => {
        this.setState({
          transactions: tData
        });
      });
  };

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  matchedTransactions = () => {
    return this.state.transactions.filter(
      transaction =>
        transaction.description
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase()) ||
        transaction.category
          .toLowerCase()
          .includes(this.state.searchTerm.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
        />
        <TransactionsList transactions={this.matchedTransactions()} />
      </div>
    );
  }
}

export default AccountContainer;
