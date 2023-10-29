import {Component} from 'react'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import NavBar from '../NavBar'
import SlideBar from '../SlideBar'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import VideoThumbnailCard from '../VideoThumbnailCard'
import {
  TrendingMainContainer,
  TrendingContainer,
  BannerContainer,
  IconContainer,
  BannerText,
  ThumbnailsListContainer,
  ThumbnailListItem,
  FailureContainer,
} from './styledComponents'
import NxtWatchContext from '../Context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class TrendingRoute extends Component {
  state = {
    videosThumbnailsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrendingThumbnailsData()
  }

  getTrendingThumbnailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const {videos} = data
      const updatedVideosData = videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          channelProfileImg: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        videosThumbnailsList: [...updatedVideosData],
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = isDarkMode => {
    const {videosThumbnailsList} = this.state
    return (
      <>
        <BannerContainer isDarkMode={isDarkMode} data-testid="banner">
          <IconContainer isDarkMode={isDarkMode}>
            <HiFire />
          </IconContainer>
          <BannerText isDarkMode={isDarkMode}>Trending</BannerText>
        </BannerContainer>
        <ThumbnailsListContainer>
          {videosThumbnailsList.map(eachItem => (
            <ThumbnailListItem key={eachItem.id}>
              <VideoThumbnailCard
                key={eachItem.id}
                cardData={eachItem}
                isNotHome
              />
            </ThumbnailListItem>
          ))}
        </ThumbnailsListContainer>
      </>
    )
  }

  renderCurrentView = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return (
          <FailureContainer>
            <LoaderView />
          </FailureContainer>
        )
      case apiStatusConstants.failure:
        return (
          <FailureContainer>
            <FailureView onClickRetryBtn={this.getVideoThumbnailsData} />
          </FailureContainer>
        )
      case apiStatusConstants.success:
        return this.renderSuccessView(isDarkMode)

      default:
        return null
    }
  }

  render() {
    return (
      <>
        <NavBar />
        <TrendingMainContainer>
          <SlideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {isDarkMode} = value
              return (
                <TrendingContainer
                  isDarkMode={isDarkMode}
                  data-testid="trending"
                >
                  {this.renderCurrentView(isDarkMode)}
                </TrendingContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </TrendingMainContainer>
      </>
    )
  }
}
export default TrendingRoute
