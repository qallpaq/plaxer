import {
  ADD_BLOG_COMMENT,
  ADD_MATCH_COMMENT,
  CHANGE_CURRENT_PAGE,
  CHANGE_MODAL_SLIDE,
  SET_ALERT
} from './types'


const changeModalSlide = payload => ({type: CHANGE_MODAL_SLIDE, payload})
const changeCurrentPage = payload => ({type: CHANGE_CURRENT_PAGE, payload})
const addBlogComment = payload => ({type: ADD_BLOG_COMMENT, payload})
const addMatchComment = payload => ({type: ADD_MATCH_COMMENT, payload})
const setAlert = payload => ({type: SET_ALERT, payload})


export {
  changeModalSlide,
  changeCurrentPage,
  addBlogComment,
  addMatchComment,
  setAlert
}
