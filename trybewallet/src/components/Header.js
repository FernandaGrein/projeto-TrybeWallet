import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import '../App.css';

class Header extends React.Component {
    state = {
      currency: 'BRL',
    };

    totalCalculate = () => {
      const { expensesArray } = this.props;
      const totalPrice = expensesArray.reduce((acc, cur) => {
        const value = parseFloat(cur.exchangeRates[cur.currency].ask * cur.value);
        acc += value;
        return acc;
      }, 0);
      return totalPrice.toFixed(2);
    }

    render() {
      const { currency } = this.state;
      const { emailProp } = this.props;
      return (
        <header className="Header">
          <p className="HeaderText" data-testid="email-field">
            Olá,
            {' '}
            {emailProp}
          </p>
          <p className="HeaderText" data-testid="total-field">
            {' '}
            Valor total:
            {' '}
            { this.totalCalculate() || 0 }

          </p>
          <p className="HeaderText" data-testid="header-currency-field">
            Moeda:
            {' '}
            {currency}

          </p>
        </header>);
    }
}

const mapStateToProps = (state) => ({
  emailProp: state.user.email,
  expensesArray: state.wallet.expenses,
});

Header.propTypes = {
  emailProp: PropTypes.string.isRequired,
  expensesArray: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Header);
