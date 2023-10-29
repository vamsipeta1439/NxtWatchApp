import styled from 'styled-components'

export const TrendingMainContainer = styled.div`
  display: flex;
`
export const TrendingContainer = styled.div`
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
export const FailureContainer = styled.div`
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ThumbnailsListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
`
export const ThumbnailListItem = styled.li``
