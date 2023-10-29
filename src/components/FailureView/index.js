import {
  FailureContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  RetryBtn,
} from './styledComponents'
import NxtWatchContext from '../Context/NxtWatchContext'

const FailureView = props => {
  const {onClickRetryBtn} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkMode} = value
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
              We are having some trouble to complete your request. Please try
              again.
            </FailureDescription>
            <RetryBtn type="button" onClick={onClickRetryBtn}>
              Retry
            </RetryBtn>
          </FailureContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}
export default FailureView
