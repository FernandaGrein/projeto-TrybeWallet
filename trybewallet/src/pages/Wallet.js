import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Forms';
import Header from '../components/Header';
import Table from '../components/Table';
import '../App.css';

class Wallet extends React.Component {
  render() {
    return (
      <div className="walletPage">
        <Header />
        <Form />
        <Table />
      </div>);
  }
}
const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
});

export default connect(mapStateToProps)(Wallet);
