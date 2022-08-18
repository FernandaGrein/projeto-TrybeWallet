import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';
import '../App.css';

class Login extends React.Component {
  state = {
    buttonDisable: true,
    email: '',
    password: '',
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => this.enableButton());
  }

  enableButton = () => {
    const { email, password } = this.state;
    const mailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const minLength = 6;
    if (password.length >= minLength
      && email.match(mailformat)
      && email.length >= minLength
    ) {
      this.setState({ buttonDisable: false });
    } else {
      this.setState({ buttonDisable: true });
    }
  }

  handleClick = () => {
    const { email } = this.state;
    const { history, saveEmails } = this.props;
    saveEmails(email);
    history.push('/carteira');
  }

  render() {
    const { buttonDisable, email, password } = this.state;
    return (
      <div className="loginPage">
        <h3>MyWallet</h3>
        <label className="Input" htmlFor="email">
          Email:
          <input
            id="email"
            name="email"
            type="email"
            value={ email }
            pattern="[^ @]*@[^ @]*"
            data-testid="email-input"
            onChange={ this.handleChange }
          />
        </label>
        <label className="Input" htmlFor="password">
          Senha:
          <input
            id="password"
            name="password"
            type="password"
            value={ password }
            data-testid="password-input"
            onChange={ this.handleChange }
          />
        </label>
        <button
          className="Button"
          type="button"
          disabled={ buttonDisable }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
      </div>);
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmails: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  saveEmails: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
