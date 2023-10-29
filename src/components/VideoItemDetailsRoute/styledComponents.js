import styled from 'styled-components'

export const VideoDetailsBgContainer = styled.div`
  background-color: ${props => (props.isDarkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoDetailsMainContainer = styled.div`
  height: 92vh;
  display: flex;
  margin: 0px;
  box-sizing: border-box;
`
export const FailureContainer = styled.div`
  height: 92vh;
  width: 84vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  @media screen and (width<767px) {
    width: 100vw;
  }
`
export const VideoContainer = styled.div`
  height: 30vh;
  width: 100vw;
  padding: 25px 0px 15px 0px;
  @media screen and (min-width: 500px) {
    height: 45vh;
  }
  @media screen and (min-width: 768px) {
    height: 60vh;
    width: 75vw;
    padding-left: 75px;
  }
`
export const VideoTitle = styled.h1`
  color: ${props => (props.isDarkMode ? '#ebebeb' : '#000000')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
  padding: 5px;
`
export const VideosDataMainContainer = styled.div`
  display: flex;
  @media screen and (min-width: 576px) {
    margin: 0px;
    padding: 0px;
    padding-left: 20px;
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
export const IconsTextMainContainer = styled.div`
  display: flex;
`
export const IconBtn = styled.button`
  color: ${props => (props.btnStatus ? '#2563eb' : '#64748b')};
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
export const IconText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-left: 5px;
  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`
export const VideoDataIconContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`
export const HrLine = styled.hr`
  width: 100%;
  border: 1px solid ${props => (props.isDarkMode ? '#94a3b8' : '#cbd5e1')};
  margin: 5px;
  @media screen and (width<576px) {
    width: 95%;
  }
`
export const ChannelLogoNameContainer = styled.div`
  display: flex;
  padding-left: 10px;
  margin-top: 20px;
`
export const ChannelLogo = styled.img`
  height: 40px;
  width: 40px;
`
export const ChannelNameSubscriberContainer = styled.div`
  line-height: 0.4;
  margin-left: 20px;
`
export const ChannelName = styled.h1`
  color: ${props => (props.isDarkMode ? '#94a3b8' : '#000000')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
`
export const SubscribersText = styled.p`
  color: ${props => (props.isDarkMode ? '#94a3b8' : ' #606060')};
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 400;
`
export const VideoDescription = styled.p`
  color: ${props => (props.isDarkMode ? '#ebebeb' : '#000000')};
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 400;
  padding: 6px;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`
