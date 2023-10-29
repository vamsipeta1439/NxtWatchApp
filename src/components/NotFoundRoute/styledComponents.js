import styled from 'styled-components'

export const NotFoundMainContainer = styled.div`
  display: flex;
`
export const NotFoundContainer = styled.div`
  background: ${props => (props.isDarkMode ? '#181818' : '#f9f9f9')};
  height: 92vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 84vw;
  }
`
export const NotFoundImg = styled.img`
  height: 150px;
  width: 200px;
  @media screen and (min-width: 768px) {
    height: 180px;
    width: 240px;
  }
`
export const NotFoundHeading = styled.h1`
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#231f20')};
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 500;
`
export const NotFoundDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#909090' : ' #606060')};
  font-family: 'Roboto';
  font-size: 15px;
  text-align: center;
  padding: 0px 25px 0px 25px;
`
