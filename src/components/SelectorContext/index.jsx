import React, { useContext } from 'react'
import { useSelector } from 'react-redux'


const SelectorContext = React.createContext()

export const useSelectorContext = () => {
  return useContext(SelectorContext)
}

const SelectorContextProvider = ({children}) => {
  const selectors = {
    aboutTabs: useSelector(({aboutTabs}) => aboutTabs),
    blogTabs: useSelector(({blogTabs}) => blogTabs),
    gamesTabs: useSelector(({gamesTabs}) => gamesTabs),
    currentModalSlide: useSelector(({currentModalSlide}) => currentModalSlide),
    currentPage: useSelector(({currentPage}) => currentPage),
    blogComments: useSelector(({blogComments}) => blogComments),
    matchComments: useSelector(({matchComments}) => matchComments),
    alert: useSelector(({alert}) => alert)
  }

  return (
    <SelectorContext.Provider value={selectors}>
      {children}
    </SelectorContext.Provider>
  )
}

export default SelectorContextProvider
