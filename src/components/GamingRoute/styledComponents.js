import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GamingMainContainer = styled.div`
  display: flex;
`
export const GamingContainer = styled.div`
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
export const FailureMainContainer = styled.div`
  height: 92vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const CardsListContainer = styled.ul`
  height: 80vh;
  list-style-type: none;
  padding: 0px;
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const CardContainer = styled.li`
  width: 40vw;
  margin: 15px;
  @media screen and (min-width: 500px) {
    width: 28vw;
    margin: 10px;
  }
  @media screen and (min-width: 767px) {
    width: 25vw;
    margin: 0px;
  }
`
export const CardImg = styled.img`
  height: 200px;
  width: 160px;
  border-radius: 10px;
  @media screen and (min-width: 500px) {
    height: 190px;
    width: 150px;
  }
  @media screen and (min-width: 767px) {
    height: 350px;
    width: 20vw;
  }
`
export const CardHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#ffffff' : '#0f0f0f')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: bold;
`
export const CardDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#64748b')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
`
export const LinkElement = styled(Link)`
  text-decoration: none;
`
export const FailureContainer = styled.div`
  height: 55vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  padding-right: 45px;
`
export const FailureImg = styled.img`
  height: 150px;
  width: 200px;
  @media screen and (min-width: 768px) {
    height: 180px;
    width: 240px;
  }
`
export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#231f20')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`
export const FailureDescription = styled.p`
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
