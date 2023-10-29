import styled from 'styled-components'

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
