import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh, BsX} from 'react-icons/bs'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import NxtWatchContext from '../Context/NxtWatchContext'
import Menu from '../MenuComponent'
import {
  NavContainer,
  NxtWatchLogo,
  NavItemsContainer,
  DisplayModeBtn,
  HamburgerIconBtn,
  LogoutIconBtn,
  LogoutBtn,
  ProfileImg,
  LoginAlertContainer,
  AlertText,
  AlertBtn,
  HamburgerMenuContainer,
  HamCloseBtn,
  HamCloseBtnContainer,
  LinkTag,
} from './styledComponents'

const NavBar = props => {
  const {history} = props

  const onLogout = () => {
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode, changeDisplayMode, onClickMenuItem} = value
        const nxtWatchLogo = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const displayModeIcon = isDarkMode ? <BsBrightnessHigh /> : <FaMoon />

        const LogoutAlert = () => close => (
          <LoginAlertContainer isDarkMode={isDarkMode}>
            <AlertText isDarkMode={isDarkMode}>
              Are you sure you want to logout?
            </AlertText>
            <div>
              <AlertBtn
                type="button"
                isOutlineBtn
                isDarkMode={isDarkMode}
                onClick={() => close()}
              >
                Cancel
              </AlertBtn>
              <AlertBtn type="button" onClick={onLogout}>
                Confirm
              </AlertBtn>
            </div>
          </LoginAlertContainer>
        )

        const HamburgerMenu = () => close => (
          <HamburgerMenuContainer isDarkMode={isDarkMode}>
            <HamCloseBtnContainer>
              <HamCloseBtn isDarkMode={isDarkMode} onClick={() => close()}>
                <BsX />
              </HamCloseBtn>
            </HamCloseBtnContainer>
            <Menu />
          </HamburgerMenuContainer>
        )
        const onClickLogo = () => {
          onClickMenuItem(1)
          history.replace('/')
        }
        return (
          <NavContainer isDarkMode={isDarkMode}>
            <LinkTag to="/" onClick={onClickLogo}>
              <NxtWatchLogo src={nxtWatchLogo} alt="website logo" />
            </LinkTag>
            <NavItemsContainer>
              <DisplayModeBtn
                type="button"
                isDarkMode={isDarkMode}
                onClick={changeDisplayMode}
                data-testid="theme"
              >
                {displayModeIcon}
              </DisplayModeBtn>
              <Popup
                modal
                trigger={
                  <HamburgerIconBtn type="button" isDarkMode={isDarkMode}>
                    <GiHamburgerMenu />
                  </HamburgerIconBtn>
                }
              >
                {HamburgerMenu()}
              </Popup>

              <Popup
                modal
                trigger={
                  <LogoutIconBtn type="button" isDarkMode={isDarkMode}>
                    <FiLogOut />
                  </LogoutIconBtn>
                }
              >
                {LogoutAlert()}
              </Popup>
              <ProfileImg
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <LogoutBtn type="button" isDarkMode={isDarkMode}>
                    Logout
                  </LogoutBtn>
                }
              >
                {LogoutAlert()}
              </Popup>
            </NavItemsContainer>
          </NavContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default withRouter(NavBar)
