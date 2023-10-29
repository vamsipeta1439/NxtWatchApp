import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import LoginRoute from './components/LoginRoute'
import Home from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ProtectedRoute from './components/ProtectedRoute'
import VideoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NxtWatchContext from './components/Context/NxtWatchContext'

import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isDarkMode: false,
    likedVideosList: [],
    disLikedVideosList: [],
    isActiveMenuTabId: 1,
    savedVideosList: [],
  }

  changeDisplayMode = () =>
    this.setState(prevState => ({isDarkMode: !prevState.isDarkMode}))

  onClickMenuItem = id => this.setState({isActiveMenuTabId: id})

  onClickDislikeBtn = id => {
    const {likedVideosList, disLikedVideosList} = this.state
    if (disLikedVideosList.includes(id)) {
      const newDisLikedVideosList = disLikedVideosList.filter(
        eachId => eachId !== id,
      )
      this.setState({disLikedVideosList: [...newDisLikedVideosList]})
    } else if (likedVideosList.includes(id)) {
      const newLikedVideosList = likedVideosList.filter(eachId => eachId !== id)
      const newDisLikedVideosList = [...disLikedVideosList, id]
      this.setState({
        likedVideosList: [...newLikedVideosList],
        disLikedVideosList: [...newDisLikedVideosList],
      })
    } else {
      const newDisLikedVideosList = [...disLikedVideosList, id]
      this.setState({disLikedVideosList: [...newDisLikedVideosList]})
    }
  }

  onClickLikeBtn = id => {
    const {likedVideosList, disLikedVideosList} = this.state
    if (likedVideosList.includes(id)) {
      const newLikedVideosList = likedVideosList.filter(eachId => eachId !== id)
      this.setState({likedVideosList: [...newLikedVideosList]})
    } else if (disLikedVideosList.includes(id)) {
      const newDislikedVideosList = disLikedVideosList.filter(
        eachId => eachId !== id,
      )
      const newLikedVideosList = [...likedVideosList, id]
      this.setState({
        likedVideosList: [...newLikedVideosList],
        disLikedVideosList: [...newDislikedVideosList],
      })
    } else {
      const newLikedVideosList = [...likedVideosList, id]
      this.setState({likedVideosList: [...newLikedVideosList]})
    }
  }

  onClickSaveIcon = videoDetails => {
    const {savedVideosList} = this.state
    const savedIdsList = savedVideosList.map(eachItem => eachItem.id)
    if (savedIdsList.includes(videoDetails.id)) {
      const newSavedVideosList = savedVideosList.filter(
        eachId => eachId.id !== videoDetails.id,
      )
      this.setState({savedVideosList: [...newSavedVideosList]})
    } else {
      const newSavedVideosList = [...savedVideosList, videoDetails]
      this.setState({savedVideosList: [...newSavedVideosList]})
    }
  }

  render() {
    const {
      isDarkMode,
      likedVideosList,
      disLikedVideosList,
      isActiveMenuTabId,
      savedVideosList,
    } = this.state
    return (
      <NxtWatchContext.Provider
        value={{
          isDarkMode,
          changeDisplayMode: this.changeDisplayMode,
          likedVideosList,
          disLikedVideosList,
          onClickLikeBtn: this.onClickLikeBtn,
          onClickDislikeBtn: this.onClickDislikeBtn,
          isActiveMenuTabId,
          onClickMenuItem: this.onClickMenuItem,
          savedVideosList,
          onClickSaveIcon: this.onClickSaveIcon,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetailsRoute}
          />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route path="/not-found" component={NotFoundRoute} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchContext.Provider>
    )
  }
}

export default App
