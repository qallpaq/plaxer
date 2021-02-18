import { gamesTabs, blogTabs, aboutTabs } from '../data'
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_MODAL_SLIDE,
  ADD_COMMENT,
  SET_ALERT
} from './types'


const initialState = {
  currentModalSlide: null,
  gamesTabs: gamesTabs,
  blogTabs: blogTabs,
  aboutTabs: aboutTabs,
  currentPage: null,
  comments: [
    {
      name: 'John Jacombo',
      date: '28.09.1996',
      text: 'The company has a good customer focus and qualified specialists. The result, terms and quality of work are predictable. And i don`t like tomato.'
    }
  ],
  alert: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MODAL_SLIDE:
      return {
        ...state,
        currentModalSlide: action.payload
      }
    case CHANGE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      }
    case ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload]
      }
    case SET_ALERT:
      return {
        ...state,
        alert: action.payload
      }
    default:
      return state
  }
}

export default reducer
