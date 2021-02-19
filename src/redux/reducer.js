import {
  gamesTabs,
  blogTabs,
  aboutTabs
} from '../data'
import {
  CHANGE_CURRENT_PAGE,
  CHANGE_MODAL_SLIDE,
  ADD_BLOG_COMMENT,
  SET_ALERT,
  ADD_MATCH_COMMENT
} from './types'


const initialState = {
  currentModalSlide: null,
  gamesTabs: gamesTabs,
  blogTabs: blogTabs,
  aboutTabs: aboutTabs,
  currentPage: null,
  blogComments: [
    {
      name: 'John Jacombo',
      date: '28.09.1996',
      text: 'The company has a good customer focus and qualified specialists. The result, terms and quality of work are predictable. And i don`t like tomato.'
    }
  ],
  matchComments: [
    {
      name: 'Jason Statham',
      date: '31.11.2017',
      text: 'Do 40 hard minutes, not an hour and a half of nonsense.'
    },
    {
      name: 'Jack Fresco',
      date: '22.02.2021',
      text: 'There are no bad people, there are people with insufficient information to make appropriate decisions.'
    }
  ],
  alert: false
}

const reducer = (state = initialState, action) => {

  const createComments = comments => {
    return {
      ...state,
      [comments]: [...state[comments], action.payload]
    }
  }

  const addFromPayload = key => ({...state, [key]: action.payload})

  switch (action.type) {
    case CHANGE_MODAL_SLIDE:
      return addFromPayload('currentModalSlide')
    case CHANGE_CURRENT_PAGE:
      return addFromPayload('currentPage')
    case SET_ALERT:
      return addFromPayload('alert')
    case ADD_BLOG_COMMENT:
      return createComments('blogComments')
    case ADD_MATCH_COMMENT:
      return createComments('matchComments')
    default:
      return state
  }
}

export default reducer
