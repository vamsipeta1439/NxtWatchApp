import NavBar from '../NavBar'
import SlideBar from '../SlideBar'
import {
  NotFoundMainContainer,
  NotFoundContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'
import NxtWatchContext from '../Context/NxtWatchContext'

const NotFoundRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      const imageSrc = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      return (
        <>
          <NavBar />
          <NotFoundMainContainer>
            <SlideBar />
            <NotFoundContainer isDarkMode={isDarkMode}>
              <NotFoundImg src={imageSrc} alt="not found" />
              <NotFoundHeading isDarkMode={isDarkMode}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription isDarkMode={isDarkMode}>
                We are sorry,the page you requested could not be found.
              </NotFoundDescription>
            </NotFoundContainer>
          </NotFoundMainContainer>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)
export default NotFoundRoute
