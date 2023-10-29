import styled from 'styled-components'

export const SavedVideosMainContainer = styled.div`
  display: flex;
`
export const SavedVideosContainer = styled.div`
  background: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
  width: 100vw;
  height: 92vh;
  margin: 0px;
  overflow: auto;
  @media screen and (min-width: 767px) {
    width: 84vw;
  }
`
export const BannerContainer = styled.div`
  background: ${props => (props.isDarkMode ? '#181818' : '#d7dfe9')};
  height: 12vh;
  display: flex;
  align-items: center;
  padding-left: 40px;
  margin: 0px;
  box-sizing: border-box;
`
export const IconContainer = styled.div`
  background: ${props => (props.isDarkMode ? '#0f0f0f' : '#cbd5e1')};
  height: 70px;
  width: 70px;
  border-radius: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff0b37;
  font-size: 30px;
`
export const BannerText = styled.h1`
  color: ${props => (props.isDarkMode ? '#cbd5e1' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: bold;
  margin-left: 15px;
`
export const NoVideosContainer = styled.div`
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImg = styled.img`
  height: 160px;
  width: 260px;
`
export const NoVideosHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`
export const NoVideosDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
`
export const ThumbnailsListContainer = styled.ul`
  padding: 0px;
  list-style-type: none;
`
export const ThumbnailItem = styled.li``
