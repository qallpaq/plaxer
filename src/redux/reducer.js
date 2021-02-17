import { gamesTabs, blogTabs, aboutTabs } from '../data'
import { CHANGE_MODAL_SLIDE } from './types'


const initialState = {
  currentModalSlide: null,
  gamesTabs: gamesTabs,
  blogTabs: blogTabs,
  aboutTabs: aboutTabs
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL_SLIDE:
      return {
        ...state,
        currentModalSlide: action.payload
      }
    default:
      return state
  }
}

export default reducer
