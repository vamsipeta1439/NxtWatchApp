import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  margin: 5px 0px 5px 0px;
  @media screen and (min-width: 576px) {
    width: ${props => (props.isNotHome ? '84vw' : '50vw')};
    padding: 10px;
    display: ${props => (props.isNotHome ? 'flex' : 'block')};
  }
  @media screen and (min-width: 768px) {
    width: ${props => (props.isNotHome ? '70vw' : '26vw')};
    padding: 15px;
  }
`

export const CardImg = styled.img`
  height: 20vh;
  width: 100vw;
  object-fit: cover;
  @media screen and (min-width: 576px) {
    height: ${props => (props.isNotHome ? '140px' : '20vw')};
    width: ${props => (props.isNotHome ? '240px' : '45vw')};
  }
  @media screen and (min-width: 768px) {
    height: ${props => (props.isNotHome ? '180px' : '25vh')};
    width: ${props => (props.isNotHome ? '320px' : '25vw')};
  }
`
export const ChannelLogoTitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 25px 0px 25px;
  margin: 0px;
  @media screen and (min-width: 576px) {
    padding: 0px 15px 0px 15px;
  }
`
export const ChannelLogo = styled.img`
  height: 30px;
  width: 30px;
  @media screen and (min-width: 576px) {
    display: ${props => (props.isNotHome ? 'none' : 'block')};
  }
`
export const VideoTitle = styled.p`
  color: ${props => (props.isDarkMode ? '#f1f5f9' : ' #231f20')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
  padding: 0px;
  padding-left: 10px;
  margin: 2px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px;
  margin: 0px;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`
export const ChannelName = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  margin: 8px;
  @media screen and (min-width: 576px) {
    padding: 0px;
    padding-left: ${props => (props.isNotHome ? '25px' : '60px')};
    margin: 0px;
  }
`
export const VideosDataMainContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    margin: 0px;
    padding: 0px;
    padding-left: ${props => (props.isNotHome ? '20px' : '50px')};
  }
`
export const VideosDataContainer = styled.div`
  color: #616e7c;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  @media screen and (min-width: 576px) {
    padding: 0px;
  }
`
export const DataText = styled.p`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`
export const CardLink = styled(Link)`
  text-decoration: none;
`
