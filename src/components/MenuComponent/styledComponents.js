import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MenuListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  padding-top: 100px;
  @media screen and (min-width: 768px) {
    padding-top: 30px;
  }
  margin: 0px;
`
export const MenuListItem = styled.li`
  background-color: ${props =>
    props.isActiveTab
      ? `${props.isDarkMode ? '#383838' : '#cbd5e1'}`
      : 'transparent'};
  width: 250px;
  color: ${props => (props.isActiveTab ? '#ff0000' : '#616e7c')};
  font-family: 'Roboto';
  font-size: 20px;
  display: flex;
  align-items: center;
  padding-left: 75px;
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 15vw;
    padding-left: 15px;
  }
`
export const MenuText = styled.p`
  color: ${props => (props.isDarkMode ? '#e2e8f0' : '#1e293b')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: ${props => (props.isActiveTab ? '500' : '300')};
  margin-left: 15px;
`
export const MenuItemLink = styled(Link)`
  text-decoration: none;
`
