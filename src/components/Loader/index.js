import Loader from 'react-loader-spinner'
import {LoadingContainer} from './styledComponents'

const LoaderView = () => (
  <LoadingContainer data-testid="loader">
    <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
  </LoadingContainer>
)
export default LoaderView
