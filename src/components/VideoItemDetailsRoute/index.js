import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import LoaderView from '../Loader'
import FailureView from '../FailureView'
import Navbar from '../NavBar'
import SlideBar from '../SlideBar'
import NxtWatchContext from '../Context/NxtWatchContext'
import {
  VideoDetailsBgContainer,
  VideoDetailsMainContainer,
  FailureContainer,
  VideoContainer,
  VideoTitle,
  VideosDataMainContainer,
  VideosDataContainer,
  DataText,
  IconsTextMainContainer,
  IconText,
  IconBtn,
  VideoDataIconContainer,
  HrLine,
  ChannelLogoNameContainer,
  ChannelLogo,
  ChannelNameSubscriberContainer,
  ChannelName,
  SubscribersText,
  VideoDescription,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetailsRoute extends Component {
  state = {apiStatus: apiStatusConstants.initial, videoDetails: {}}

  componentDidMount() {
    this.getVideoData()
  }

  getVideoData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const videoData = {videoDetailsObj: data.video_details}
      const {videoDetailsObj} = videoData
      const updatedVideoDetails = {
        channel: {
          name: videoDetailsObj.channel.name,
          profileImageUrl: videoDetailsObj.channel.profile_image_url,
          subscriberCount: videoDetailsObj.channel.subscriber_count,
        },
        id: videoDetailsObj.id,
        description: videoDetailsObj.description,
        publishedAt: videoDetailsObj.published_at,
        thumbnailUrl: videoDetailsObj.thumbnail_url,
        title: videoDetailsObj.title,
        videoUrl: videoDetailsObj.video_url,
        viewCount: videoDetailsObj.view_count,
      }

      this.setState({
        apiStatus: apiStatusConstants.success,
        videoDetails: {...updatedVideoDetails},
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderSuccessView = () => {
    const {videoDetails} = this.state
    const {
      id,
      videoUrl,
      description,
      title,
      publishedAt,
      viewCount,
      channel,
    } = videoDetails
    console.log(videoUrl)
    const {name, profileImageUrl, subscriberCount} = channel
    const yearsCount = formatDistanceToNow(new Date(publishedAt)).split(' ')[1]
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {
            isDarkMode,
            onClickLikeBtn,
            onClickDislikeBtn,
            likedVideosList,
            disLikedVideosList,
            savedVideosList,
            onClickSaveIcon,
          } = value

          const likeBtnStatus = likedVideosList.includes(id)
          const disLikedBtnStatus = disLikedVideosList.includes(id)
          const onClickLikeButton = () => onClickLikeBtn(id)
          const onClickDislikeButton = () => onClickDislikeBtn(id)
          const savedIdsList = savedVideosList.map(eachItem => eachItem.id)
          const saveIconStatus = savedIdsList.includes(videoDetails.id)
          const saveIconText = saveIconStatus ? 'Saved' : 'Save'
          const onClickSaveButton = () => onClickSaveIcon(videoDetails)

          const newVideoUrl = `${videoUrl}&origin=http://localhost:3000`

          return (
            <VideoContainer>
              <ReactPlayer
                url={newVideoUrl}
                height="100%"
                width="100%"
                controls
              />
              <VideoTitle isDarkMode={isDarkMode}>{title}</VideoTitle>
              <VideoDataIconContainer>
                <VideosDataMainContainer>
                  <VideosDataContainer>
                    <BsDot />
                    <DataText>{viewCount}</DataText>
                  </VideosDataContainer>
                  <VideosDataContainer>
                    <BsDot />
                    <DataText>{yearsCount} years ago</DataText>
                  </VideosDataContainer>
                </VideosDataMainContainer>
                <IconsTextMainContainer>
                  <IconBtn
                    type="button"
                    isDarkMode={isDarkMode}
                    onClick={onClickLikeButton}
                    btnStatus={likeBtnStatus}
                  >
                    <BiLike />
                    <IconText>Like</IconText>
                  </IconBtn>
                  <IconBtn
                    type="button"
                    isDarkMode={isDarkMode}
                    onClick={onClickDislikeButton}
                    btnStatus={disLikedBtnStatus}
                  >
                    <BiDislike />
                    <IconText>Dislike</IconText>
                  </IconBtn>
                  <IconBtn
                    type="button"
                    isDarkMode={isDarkMode}
                    onClick={onClickSaveButton}
                    btnStatus={saveIconStatus}
                  >
                    <MdPlaylistAdd />
                    <IconText>{saveIconText}</IconText>
                  </IconBtn>
                </IconsTextMainContainer>
              </VideoDataIconContainer>
              <HrLine isDarkMode={isDarkMode} />
              <ChannelLogoNameContainer>
                <ChannelLogo src={profileImageUrl} alt="channel logo" />
                <ChannelNameSubscriberContainer>
                  <ChannelName isDarkMode={isDarkMode}>{name}</ChannelName>
                  <SubscribersText isDarkMode={isDarkMode}>
                    {subscriberCount} subscribers
                  </SubscribersText>
                </ChannelNameSubscriberContainer>
              </ChannelLogoNameContainer>
              <VideoDescription isDarkMode={isDarkMode}>
                {description}
              </VideoDescription>
            </VideoContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }

  renderCurrentView = () => {
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
            <FailureView onClickRetryBtn={this.getVideoData} />
          </FailureContainer>
        )
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode} = value
          return (
            <VideoDetailsBgContainer
              isDarkMode={isDarkMode}
              data-testid="videoItemDetails"
            >
              <Navbar />
              <VideoDetailsMainContainer>
                <SlideBar />
                {this.renderCurrentView()}
              </VideoDetailsMainContainer>
            </VideoDetailsBgContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default VideoItemDetailsRoute
