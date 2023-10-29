import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkMode: false,
  ChangeDisplayMode: () => {},
  likedVideosList: [],
  onClickLikeBtn: () => {},
  disLikedVideosList: [],
  onClickDislikeBtn: () => {},
  isActiveMenuTabId: 1,
  onClickMenuItem: () => {},
  savedVideosList: [],
  onClickSaveIcon: () => {},
})
export default NxtWatchContext
