import styled from 'styled-components'

export const SlideBarContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#231f20' : '#ffffff')};
  height: 92vh;
  width: 16vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (width<767px) {
    display: none;
  }
`
export const SlideBarFooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`
export const FooterHeading = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
`
export const ContactUsIconContainer = styled.div`
  margin-top: 10px;
`

export const ContactIconBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 0px;
  padding-right: 10px;
`
export const ContactIconImg = styled.img`
  height: 25px;
  width: 25px;
`
export const FooterDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
`
