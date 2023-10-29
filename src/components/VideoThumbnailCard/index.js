import {formatDistanceToNow} from 'date-fns'
import {BsDot} from 'react-icons/bs'
import {
  CardContainer,
  CardImg,
  ChannelLogo,
  ChannelLogoTitleContainer,
  VideoTitle,
  VideoDescriptionContainer,
  ChannelName,
  VideosDataMainContainer,
  VideosDataContainer,
  DataText,
  CardLink,
} from './styledComponents'
import NxtWatchContext from '../Context/NxtWatchContext'

const VideoThumbnailCard = props => {
  const {cardData, isNotHome} = props
  const {id, thumbnailUrl, channel, title, viewCount, publishedAt} = cardData
  const {channelProfileImg, name} = channel
  const yearsCount = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]

  const toPath = `/videos/${id}`

  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
        return (
          <CardLink to={toPath}>
            <CardContainer isNotHome={isNotHome}>
              <CardImg
                src={thumbnailUrl}
                alt="video thumbnail"
                isNotHome={isNotHome}
              />
              <div>
                <ChannelLogoTitleContainer>
                  <ChannelLogo
                    src={channelProfileImg}
                    alt="channel logo"
                    isNotHome={isNotHome}
                  />
                  <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
                </ChannelLogoTitleContainer>
                <VideoDescriptionContainer>
                  <ChannelName isNotHome={isNotHome}>{name}</ChannelName>
                  <VideosDataMainContainer isNotHome={isNotHome}>
                    <VideosDataContainer>
                      <BsDot />
                      <DataText>{viewCount}</DataText>
                    </VideosDataContainer>
                    <VideosDataContainer>
                      <BsDot />
                      <DataText>{yearsCount} years ago</DataText>
                    </VideosDataContainer>
                  </VideosDataMainContainer>
                </VideoDescriptionContainer>
              </div>
            </CardContainer>
          </CardLink>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default VideoThumbnailCard
