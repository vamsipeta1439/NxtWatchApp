import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import NavBar from '../NavBar'
import SlideBar from '../SlideBar'
import LoaderView from '../Loader'
import {
  GamingMainContainer,
  GamingContainer,
  BannerContainer,
  IconContainer,
  BannerText,
  FailureMainContainer,
  CardsListContainer,
  CardContainer,
  CardImg,
  CardHeading,
  CardDescription,
  LinkElement,
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryBtn,
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
    this.getGamingThumbnailsData()
  }

  getThumbnailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/videos/gaming'
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
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosThumbnailsList: [...updatedVideosData],
        apiStatus: apiStatusConstants.success,
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
            <SiYoutubegaming />
          </IconContainer>
          <BannerText isDarkMode={isDarkMode}>Gaming</BannerText>
        </BannerContainer>
        <CardsListContainer>
          {videosThumbnailsList.map(eachItem => {
            const {id, thumbnailUrl, viewCount, title} = eachItem
            return (
              <LinkElement to={`/videos/${id}`} key={id}>
                <CardContainer key={id}>
                  <CardImg src={thumbnailUrl} alt="video thumbnail" />
                  <CardHeading isDarkMode={isDarkMode}>{title}</CardHeading>
                  <CardDescription isDarkMode={isDarkMode}>
                    {viewCount} Watching <br />
                    Worldwide
                  </CardDescription>
                </CardContainer>
              </LinkElement>
            )
          })}
        </CardsListContainer>
      </>
    )
  }

  renderFailureView = isDarkMode => {
    const imgUrl = isDarkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
    return (
      <FailureContainer>
        <FailureImg src={imgUrl} alt="failure view" />
        <FailureHeading isDarkMode={isDarkMode}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureDescription isDarkMode={isDarkMode}>
          We are having some trouble to complete your request. Please try again.
        </FailureDescription>
        <RetryBtn type="button" onClick={this.getVideoThumbnailsData}>
          Retry
        </RetryBtn>
      </FailureContainer>
    )
  }

  renderCurrentView = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return (
          <FailureMainContainer>
            <LoaderView />
          </FailureMainContainer>
        )
      case apiStatusConstants.failure:
        return (
          <FailureMainContainer>
            {this.renderFailureView(isDarkMode)}
          </FailureMainContainer>
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
        <GamingMainContainer>
          <SlideBar />
          <NxtWatchContext.Consumer>
            {value => {
              const {isDarkMode} = value
              return (
                <GamingContainer isDarkMode={isDarkMode} data-testid="gaming">
                  {this.renderCurrentView(isDarkMode)}
                </GamingContainer>
              )
            }}
          </NxtWatchContext.Consumer>
        </GamingMainContainer>
      </>
    )
  }
}
export default TrendingRoute
