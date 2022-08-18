import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { fetchCurrency, fetchquotation, saveEditions } from '../actions';
import '../App.css';

class Forms extends React.Component {
    state = {
      value: '',
      description: '',
      selectCurrency: 'USD',
      payment: 'Dinheiro',
      category: 'Alimentação',
      id: 0,
    };

    componentDidMount() {
      const { getCurrency } = this.props;
      getCurrency();
    }

    handleChange = ({ target }) => {
      const { name, value } = target;
      this.setState({ [name]: value });
    }

    handleClick = () => {
      const { value, description, selectCurrency, payment, category, id } = this.state;
      const { getcotation } = this.props;
      this.setState((prev) => ({ id: prev.id + 1 }));
      const expenseObj = {
        id,
        value,
        description,
        currency: selectCurrency,
        method: payment,
        tag: category,
      };

      getcotation(expenseObj);
      this.setState({ value: 0,
        description: '',
      });
    }

    saveEditions = () => {
      const { value, description, selectCurrency, payment, category } = this.state;
      const { saveEdition, expenses, idToEdit } = this.props;
      const expenseToEdit = expenses
        .filter((expense) => (expense.id === parseInt(idToEdit, 10)));

      const edition = {
        id: Number(idToEdit),
        value,
        description,
        currency: selectCurrency,
        method: payment,
        tag: category,
        exchangeRates: expenseToEdit[0].exchangeRates,
      };
      saveEdition(edition);
      this.setState({ value: 0,
        description: '',
      });
    }

    render() {
      const { value, description, selectCurrency,
        payment, category } = this.state;
      const { currency, editor } = this.props;
      return (
        <div className="Form">
          <label className="Input" htmlFor="value">
            Despesa:
            <input
              id="value"
              name="value"
              type="value"
              value={ value }
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label className="Input" htmlFor="description">
            Descrição:
            <input
              id="description"
              name="description"
              type="description"
              value={ description }
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <label className="Input" htmlFor="selectCurrency">
            Moeda:
            <select
              id="selectCurrency"
              name="selectCurrency"
              value={ selectCurrency }
              aria-label="moeda"
              onChange={ this.handleChange }
            >
              { currency.map((item) => (
                <option
                  aria-label="moeda"
                  key={ item }
                  value={ item }
                >
                  { item }

                </option>)) }
            </select>
          </label>
          <label className="Input" htmlFor="payment">
            Métodos de Pagamento:
            <select
              id="payment"
              data-testid="method-input"
              name="payment"
              value={ payment }
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label className="Input" htmlFor="category">
            Tipo de despesa:
            <select
              id="category"
              data-testid="tag-input"
              name="category"
              value={ category }
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          { editor
            ? (
              <button
                type="button"
                className="Button"
                onClick={ this.saveEditions }
              >
                Editar despesa

              </button>)
            : (
              <button
                className="Button"
                type="button"
                onClick={ this.handleClick }
              >
                Adicionar despesa

              </button>) }

        </div>);
    }
}
const mapStateToProps = (state) => ({
  currency: state.wallet.currencies,
  editor: state.wallet.editor,
  idToEdit: state.wallet.idToEdit,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrency: () => dispatch(fetchCurrency()),
  getcotation: (expense) => dispatch(fetchquotation(expense)),
  saveEdition: (expense) => dispatch(saveEditions(expense)),
});

Forms.propTypes = {
  currency: PropTypes.string.isRequired,
  getcotation: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired,
  editor: PropTypes.bool.isRequired,
  saveEdition: PropTypes.func.isRequired,
  idToEdit: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
