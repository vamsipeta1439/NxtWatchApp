import styled from 'styled-components'

export const HomeMainContainer = styled.div`
  height: 100vh;
`

export const HomeSlideBarContainer = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  background: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  width: 84vw;
  height: 92vh;
  margin: 0px;
  overflow: auto;
  @media screen and (width<767px) {
    width: 100vw;
  }
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 27vh;
  background-size: cover;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 25px;
`
export const BannerCloseBtn = styled.button`
  background: transparent;
  border: none;
  color: black;
  font-size: 25px;
  font-weight: bold;
  align-self: flex-end;
`
export const NxtWatchLogo = styled.img`
  height: 25px;
  width: 120px;
  margin: 5px;
`
export const NxtWatchBtn = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
export const BannerText = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  margin: 5px;
  padding-left: 10px;
  width: 300px;
`
export const BannerOutlineBtn = styled.button`
  background-color: transparent;
  border: 2px solid #1e293b;
  color: #1e293b;
  font-family: 'Roboto';
  font-weight: 600;
  padding: 10px;
  margin: 10px;
`
export const SearchContainer = styled.div`
  margin: 15px;
  margin-left: 35px;
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;
`
export const SearchInputBar = styled.input`
  background-color: transparent;
  outline: none;
  border: 1px solid grey;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-right: none;
  height: 30px;
  width: 350px;
  padding: 8px;
  color: ${props => (props.isDarkMode ? '#f8fafc' : '#475569')};
  font-family: 'Roboto';
  font-size: 15px;
`
export const SearchBarBtn = styled.button`
  background-color: ${props => (props.isDarkMode ? '#424242' : '#ebebeb')};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  outline: none;
  border: 1px solid grey;
  height: 30px;
  width: 50px;
  padding: 8px;
`
export const NoSearchResultContainer = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-right: 45px;
`
export const NoSearchImg = styled.img`
  height: 180px;
  width: 250px;
`
export const NoSearchResultsHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#231f20')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`
export const NoSearchResultsDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : ' #606060')};
  font-family: 'Roboto';
  font-size: 15px;
  text-align: center;
`
export const RetryBtn = styled.button`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  background: #4f46e5;
  border: none;
  border-radius: 5px;
  padding: 10px 20px 10px 20px;
  cursor: pointer;
`
export const HomeVideosContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export const ThumbnailListItem = styled.li``
