import {Component} from 'react'
import Cookies from 'js-cookie'
import {BsX} from 'react-icons/bs'
import {AiOutlineSearch} from 'react-icons/ai'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import VideoThumbnailCard from '../VideoThumbnailCard'
import NavBar from '../NavBar'
import SlideBar from '../SlideBar'

import {
  HomeMainContainer,
  HomeContainer,
  HomeSlideBarContainer,
  BannerContainer,
  BannerCloseBtn,
  NxtWatchBtn,
  NxtWatchLogo,
  BannerText,
  BannerOutlineBtn,
  ThumbnailListItem,
  SearchContainer,
  SearchInputBar,
  SearchBarBtn,
  NoSearchResultContainer,
  NoSearchImg,
  NoSearchResultsDescription,
  NoSearchResultsHeading,
  RetryBtn,
  HomeVideosContainer,
} from './styledComponents'
import NxtWatchContext from '../Context/NxtWatchContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
  noSearchResult: 'EMPTY',
}

class Home extends Component {
  state = {
    showBanner: true,
    searchInput: '',
    videosThumbnailsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoThumbnailsData()
  }

  getVideoThumbnailsData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    if (response.ok === true) {
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
      if (videos.length === 0) {
        this.setState({apiStatus: apiStatusConstants.noSearchResult})
      } else {
        this.setState({
          apiStatus: apiStatusConstants.success,
          videosThumbnailsList: [...updatedVideosData],
        })
      }
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onCloseBanner = () => this.setState({showBanner: false})

  onChangesearchInput = event =>
    this.setState({searchInput: event.target.value})

  renderNoSearchResultsView = isDarkMode => (
    <NoSearchResultContainer>
      <NoSearchImg
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <NoSearchResultsHeading isDarkMode={isDarkMode}>
        No Search results found
      </NoSearchResultsHeading>
      <NoSearchResultsDescription isDarkMode={isDarkMode}>
        Try different key words or remove search filter
      </NoSearchResultsDescription>
      <RetryBtn type="button" onClick={this.getVideoThumbnailsData}>
        Retry
      </RetryBtn>
    </NoSearchResultContainer>
  )

  renderSuccessView = () => {
    const {videosThumbnailsList} = this.state

    return (
      <HomeVideosContainer>
        {videosThumbnailsList.map(eachItem => (
          <ThumbnailListItem key={eachItem.id}>
            <VideoThumbnailCard
              key={eachItem.id}
              cardData={eachItem}
              isNotHome={false}
            />
          </ThumbnailListItem>
        ))}
      </HomeVideosContainer>
    )
  }

  renderHomeSection = isDarkMode => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return <LoaderView />
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return <FailureView onClickRetryBtn={this.getVideoThumbnailsData} />
      case apiStatusConstants.noSearchResult:
        return this.renderNoSearchResultsView(isDarkMode)
      default:
        return null
    }
  }

  render() {
    const {showBanner, searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value

          const bannerSection = () => (
            <BannerContainer data-testid="banner">
              <BannerCloseBtn
                type="button"
                onClick={this.onCloseBanner}
                data-testid="close"
              >
                <BsX />
              </BannerCloseBtn>
              <NxtWatchBtn type="button">
                <NxtWatchLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="nxt website logo"
                />
              </NxtWatchBtn>
              <BannerText>
                Buy Nxt Watch Premium prepaid plans with UPI
              </BannerText>
              <BannerOutlineBtn type="button">GET IT NOW</BannerOutlineBtn>
            </BannerContainer>
          )

          const searchBar = () => (
            <SearchContainer>
              <SearchInputBar
                type="search"
                placeholder="Search"
                onChange={this.onChangesearchInput}
                isDarkMode={isDarkMode}
                value={searchInput}
              />
              <SearchBarBtn
                type="button"
                isDarkMode={isDarkMode}
                onClick={this.getVideoThumbnailsData}
                data-testid="searchButton"
              >
                <AiOutlineSearch />
              </SearchBarBtn>
            </SearchContainer>
          )

          return (
            <HomeMainContainer>
              <NavBar />
              <HomeSlideBarContainer>
                <SlideBar />
                <HomeContainer isDarkMode={isDarkMode} data-testid="home">
                  {showBanner && bannerSection()}
                  {searchBar()}
                  {this.renderHomeSection(isDarkMode)}
                </HomeContainer>
              </HomeSlideBarContainer>
            </HomeMainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Home
