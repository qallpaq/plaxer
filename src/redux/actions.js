import {
  ADD_COMMENT,
  CHANGE_CURRENT_PAGE,
  CHANGE_MODAL_SLIDE,
  SET_ALERT
} from './types'


const changeModalSlide = payload => ({type: CHANGE_MODAL_SLIDE, payload})
const changeCurrentPage = payload => ({type: CHANGE_CURRENT_PAGE, payload})
const addComment = payload => ({type: ADD_COMMENT, payload})
const setAlert = payload => ({type: SET_ALERT, payload})


export {
  changeModalSlide,
  changeCurrentPage,
  addComment,
  setAlert
}
