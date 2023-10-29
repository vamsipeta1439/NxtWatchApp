import styled from 'styled-components'

export const LoginMainBgContainer = styled.div`
  background: ${props => (props.isDarkMode ? '#212121' : '#f9f9f9')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
export const LoginContainer = styled.div`
  box-shadow: ${props => (props.isDarkMode ? '' : '2px 4px 16px #ebebeb')};
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#ffffff')};
  @media screen and (max-width: 767px) {
    width: 95vw;
  }
  @media screen and (min-width: 768px) {
    width: 25vw;
  }
`
export const NxtWatchLogo = styled.img`
  height: 25px;
  width: 150px;
  margin: 20px;
`
export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: flex-start;
  margin-top: 35px;
`
export const InputLabelTag = styled.label`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#475569')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  margin: 5px;
`
export const InputField = styled.input`
  height: 4vh;
  width: 75vw;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 250px;
  }
  background-color: transparent;
  color: ${props => (props.isDarkMode ? '#f9f9f9' : '#475569')};
  font-family: 'Roboto';
  font-size: 14px;
  outline: none;
  border: 1px solid #64748b;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
`
export const CheckBox = styled(InputField)`
  height: 15px;
  width: 15px;
`
export const CheckBoxLabel = styled(InputLabelTag)`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-weight: 500;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  margin-top: 25px;
`
export const SubmitBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
  background-color: #4f46e5;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 5px;
  margin: 5px;
  margin-top: 10px;
  height: 4vh;
  width: 75vw;
  @media screen and (min-width: 768px) {
    height: 30px;
    width: 250px;
  }
`
export const ErrorTextMsg = styled.p`
  color: #ff0000;
  font-family: 'Roboto';
  font-size: 12px;
`
