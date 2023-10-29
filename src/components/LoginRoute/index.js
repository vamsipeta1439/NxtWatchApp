import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import NxtWatchContext from '../Context/NxtWatchContext'
import {
  LoginMainBgContainer,
  LoginContainer,
  NxtWatchLogo,
  LoginForm,
  InputLabelTag,
  InputField,
  CheckBoxLabel,
  CheckBox,
  CheckBoxContainer,
  SubmitBtn,
  ErrorTextMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    userName: '',
    password: '',
    passwordType: 'password',
    showError: false,
    errorText: '',
  }

  onChangeUserName = event => this.setState({userName: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onClickShowPassword = () => {
    const {passwordType} = this.state
    if (passwordType === 'password') {
      this.setState({passwordType: 'text'})
    } else {
      this.setState({passwordType: 'password'})
    }
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitFailure = errorMsg =>
    this.setState({showError: true, errorText: errorMsg})

  onSubmitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {username: userName, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.setState({showError: false})
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUserNameField = isDarkMode => {
    const {userName} = this.state
    return (
      <>
        <InputLabelTag htmlFor="user-name" isDarkMode={isDarkMode}>
          USERNAME
        </InputLabelTag>
        <InputField
          type="text"
          id="user-name"
          placeholder="Username"
          value={userName}
          onChange={this.onChangeUserName}
          isDarkMode={isDarkMode}
        />
      </>
    )
  }

  renderPasswordField = isDarkMode => {
    const {password, passwordType} = this.state
    return (
      <>
        <InputLabelTag htmlFor="current-password" isDarkMode={isDarkMode}>
          Password
        </InputLabelTag>
        <InputField
          type={passwordType}
          id="current-password"
          placeholder="Password"
          value={password}
          onChange={this.onChangePassword}
          isDarkMode={isDarkMode}
        />
      </>
    )
  }

  renderCheckBoxField = isDarkMode => (
    <CheckBoxContainer>
      <CheckBox
        type="checkbox"
        id="check-box"
        onClick={this.onClickShowPassword}
      />
      <CheckBoxLabel htmlFor="check-box" isDarkMode={isDarkMode}>
        Show Password
      </CheckBoxLabel>
    </CheckBoxContainer>
  )

  render() {
    const {showError, errorText} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          const nxtWatchLogo = isDarkMode
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          return (
            <LoginMainBgContainer isDarkMode={isDarkMode}>
              <LoginContainer isDarkMode={isDarkMode}>
                <NxtWatchLogo src={nxtWatchLogo} alt="website logo" />
                <LoginForm onSubmit={this.onSubmitForm}>
                  {this.renderUserNameField(isDarkMode)}
                  {this.renderPasswordField(isDarkMode)}
                  {this.renderCheckBoxField(isDarkMode)}
                  <SubmitBtn type="submit">Login</SubmitBtn>
                  {showError && <ErrorTextMsg>*{errorText}</ErrorTextMsg>}
                </LoginForm>
              </LoginContainer>
            </LoginMainBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default LoginRoute
