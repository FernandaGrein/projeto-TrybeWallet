import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { deleteExpense, editExpenses } from '../actions';
import '../App.css';

class Table extends React.Component {
    deleteExpense = ({ target }) => {
      const { excludeExpense } = this.props;
      const { id } = target;
      excludeExpense(id);
    }

    editInformations = ({ target }) => {
      const { editExpense } = this.props;
      const { id } = target;
      editExpense(id);
    }

    render() {
      const { expensesArray } = this.props;
      return (
        <table>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tag</th>
              <th>Método de pagamento</th>
              <th>Valor</th>
              <th>Moeda</th>
              <th>Câmbio utilizado</th>
              <th>Valor convertido</th>
              <th>Moeda de conversão</th>
              <th>Editar/Excluir</th>
            </tr>
          </thead>
          <tbody>
            { expensesArray
              .map((item) => (
                <tr key={ item.id }>
                  <td>{ item.description }</td>
                  <td>{ item.tag }</td>
                  <td>{ item.method }</td>
                  <td>{ (parseFloat(item.value)).toFixed(2) }</td>
                  <td>{ (item.exchangeRates[item.currency].name.split('/'))[0] }</td>
                  <td>
                    { (parseFloat(item.exchangeRates[item.currency].ask))
                      .toFixed(2) }

                  </td>
                  <td>
                    { (parseFloat(item.exchangeRates[item.currency]
                      .ask * item.value)).toFixed(2) }
                  </td>
                  <td>Real</td>
                  <td>
                    <button
                      id={ item.id }
                      type="button"
                      data-testid="edit-btn"
                      onClick={ this.editInformations }
                    >
                      Editar

                    </button>
                    <button
                      type="button"
                      data-testid="delete-btn"
                      onClick={ this.deleteExpense }
                      id={ item.id }
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              )) }
          </tbody>
        </table>);
    }
}

const mapDispatchToProps = (dispatch) => ({
  excludeExpense: (id) => dispatch(deleteExpense(id)),
  editExpense: (id) => dispatch(editExpenses(id)),
});

const mapStateToProps = (state) => ({
  expensesArray: state.wallet.expenses,
});

Table.propTypes = {
  excludeExpense: PropTypes.func.isRequired,
  expensesArray: PropTypes.arrayOf(Object).isRequired,
  editExpense: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
