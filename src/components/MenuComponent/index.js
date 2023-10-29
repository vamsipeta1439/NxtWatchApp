import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../Context/NxtWatchContext'
import {
  MenuListContainer,
  MenuListItem,
  MenuText,
  MenuItemLink,
} from './styledComponents'

const MenuItemList = [
  {id: 1, text: 'Home', icon: <AiFillHome />, routeLink: '/'},
  {id: 2, text: 'Trending', icon: <HiFire />, routeLink: '/trending'},
  {id: 3, text: 'Gaming', icon: <SiYoutubegaming />, routeLink: '/gaming'},
  {
    id: 4,
    text: 'Saved videos',
    icon: <MdPlaylistAdd />,
    routeLink: '/saved-videos',
  },
]

class Menu extends Component {
  render() {
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkMode, isActiveMenuTabId, onClickMenuItem} = value
          return (
            <MenuListContainer>
              {MenuItemList.map(eachItem => {
                const isActiveTab = isActiveMenuTabId === eachItem.id
                const onClickItem = () => {
                  onClickMenuItem(eachItem.id)
                }
                return (
                  <MenuItemLink
                    to={eachItem.routeLink}
                    onClick={onClickItem}
                    key={eachItem.id}
                  >
                    <MenuListItem
                      isDarkMode={isDarkMode}
                      isActiveTab={isActiveTab}
                    >
                      {eachItem.icon}
                      <MenuText
                        isDarkMode={isDarkMode}
                        isActiveTab={isActiveTab}
                      >
                        {eachItem.text}
                      </MenuText>
                    </MenuListItem>
                  </MenuItemLink>
                )
              })}
            </MenuListContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}
export default Menu
