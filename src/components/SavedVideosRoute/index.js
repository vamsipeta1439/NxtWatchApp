import {HiFire} from 'react-icons/hi'
import NavBar from '../NavBar'
import SlideBar from '../SlideBar'
import VideoThumbnailCard from '../VideoThumbnailCard'
import {
  SavedVideosMainContainer,
  SavedVideosContainer,
  BannerContainer,
  IconContainer,
  BannerText,
  NoVideosContainer,
  NoVideosImg,
  NoVideosHeading,
  NoVideosDescription,
  ThumbnailsListContainer,
  ThumbnailItem,
} from './styledComponents'
import NxtWatchContext from '../Context/NxtWatchContext'

const SavedVideosRoute = () => {
  const renderNoVideosView = isDarkMode => (
    <NoVideosContainer>
      <NoVideosImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <NoVideosHeading isDarkMode={isDarkMode}>
        No saved videos found
      </NoVideosHeading>
      <NoVideosDescription isDarkMode={isDarkMode}>
        You can save your videos while watching them
      </NoVideosDescription>
    </NoVideosContainer>
  )

  const renderVideosView = (isDarkMode, savedVideosList) => (
    <>
      <BannerContainer isDarkMode={isDarkMode} data-testid="banner">
        <IconContainer isDarkMode={isDarkMode}>
          <HiFire />
        </IconContainer>
        <BannerText isDarkMode={isDarkMode}>Saved Videos</BannerText>
      </BannerContainer>
      <ThumbnailsListContainer>
        {savedVideosList.map(eachItem => (
          <ThumbnailItem key={eachItem.id}>
            <VideoThumbnailCard
              cardData={eachItem}
              key={eachItem.id}
              isNotHome
            />
          </ThumbnailItem>
        ))}
      </ThumbnailsListContainer>
    </>
  )

  return (
    <>
      <NavBar />
      <SavedVideosMainContainer>
        <SlideBar />
        <NxtWatchContext.Consumer>
          {value => {
            const {isDarkMode, savedVideosList} = value
            const isEmpty = savedVideosList.length < 1
            return (
              <SavedVideosContainer
                isDarkMode={isDarkMode}
                data-testid="savedVideos"
              >
                {isEmpty
                  ? renderNoVideosView(isDarkMode)
                  : renderVideosView(isDarkMode, savedVideosList)}
              </SavedVideosContainer>
            )
          }}
        </NxtWatchContext.Consumer>
      </SavedVideosMainContainer>
    </>
  )
}
export default SavedVideosRoute
