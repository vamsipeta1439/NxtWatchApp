import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};
  height: 8vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  @media screen and (min-width: 767px) {
    padding: 0px 45px 0px 45px;
  }
`
export const NxtWatchLogo = styled.img`
  height: 25px;
  width: 125px;
  margin: 20px;
`
export const NavItemsContainer = styled.div`
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const DisplayModeBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : 'black')};
  font-size: 25px;
  margin: 3px;
  @media screen and (min-width: 767px) {
    font-size: 20px;
    margin-top: 6px;
  }
`
export const HamburgerIconBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : 'black')};
  font-size: 25px;
  margin: 3px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const LogoutIconBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : 'black')};
  font-size: 25px;
  margin: 3px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
export const LogoutBtn = styled.button`
  background: transparent;
  height: 22px;
  width: 60px;
  border: 2px solid ${props => (props.isDarkMode ? '#ffffff' : ' #4f46e5')};
  color: ${props => (props.isDarkMode ? '#ffffff' : ' #4f46e5')};
  border-radius: 3px;
  font-family: 'Roboto';
  font-size: 12px;
  @media screen and (width<767px) {
    display: none;
  }
`
export const ProfileImg = styled.img`
  height: 25px;
  width: 25px;
  margin-left: 10px;
  margin-right: 10px;
  @media screen and (width<767px) {
    display: none;
  }
`
export const LoginAlertContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#313131' : '#ffffff')};
  border-radius: 10px;
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const AlertText = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffffff' : '#383838')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const AlertBtn = styled.button`
  background-color: ${props =>
    props.isOutlineBtn ? 'transparent' : '#3b82f6'};
  color: ${props => (props.isOutlineBtn ? '#64748b' : '#ffffffff')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  border: ${props => (props.isOutlineBtn ? '1px solid #94a3b8' : 'none')};
  height: 30px;
  width: 70px;
  margin: 5px;
  border-radius: 5px;
`
export const HamburgerMenuContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#313131' : 'white')};
  height: 400px;
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const HamCloseBtn = styled.button`
  background: transparent;
  border: none;
  color: ${props => (props.isDarkMode ? '#ffffff' : 'black')};
  font-size: 25px;
`
export const HamCloseBtnContainer = styled.div`
  align-self: flex-end;
  position: relative;
  top: 20px;
  right: 15px;
`
export const LinkTag = styled(Link)`
  text-decoration: none;
`
