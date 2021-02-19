import React, { useContext } from 'react'
import { useSelector } from 'react-redux'


const SelectorContext = React.createContext()

export const useSelectorContext = () => {
  return useContext(SelectorContext)
}

const SelectorContextProvider = ({children}) => {
  const selectors = {
    aboutTabs: useSelector(({root}) => root.aboutTabs),
    blogTabs: useSelector(({root}) => root.blogTabs),
    gamesTabs: useSelector(({root}) => root.gamesTabs),
    currentModalSlide: useSelector(({root}) => root.currentModalSlide),
    currentPage: useSelector(({root}) => root.currentPage),
    blogComments: useSelector(({root}) => root.blogComments),
    matchComments: useSelector(({root}) => root.matchComments),
    alert: useSelector(({root}) => root.alert)
  }

  return (
    <SelectorContext.Provider value={selectors}>
      {children}
    </SelectorContext.Provider>
  )
}

export default SelectorContextProvider
