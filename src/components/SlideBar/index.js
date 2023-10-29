import {
  SlideBarContainer,
  SlideBarFooterContainer,
  FooterHeading,
  ContactUsIconContainer,
  ContactIconBtn,
  ContactIconImg,
  FooterDescription,
} from './styledComponents'
import NxtWatchContext from '../Context/NxtWatchContext'
import Menu from '../MenuComponent'

const SlideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkMode} = value
      return (
        <SlideBarContainer isDarkMode={isDarkMode}>
          <Menu />
          <SlideBarFooterContainer>
            <FooterHeading isDarkMode={isDarkMode}>CONTACT US</FooterHeading>
            <ContactUsIconContainer>
              <ContactIconBtn type="button">
                <ContactIconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </ContactIconBtn>
              <ContactIconBtn type="button">
                <ContactIconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </ContactIconBtn>
              <ContactIconBtn type="button">
                <ContactIconImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </ContactIconBtn>
            </ContactUsIconContainer>
            <FooterDescription isDarkMode={isDarkMode}>
              Enjoy! Now to see your channels and recommendations!
            </FooterDescription>
          </SlideBarFooterContainer>
        </SlideBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SlideBar
