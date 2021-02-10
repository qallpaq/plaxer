import games from '../data'


const initialState = {
  test: false,
  games: games
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST':
      return {
        ...state,
        test: true
      }
    default:
      return state
  }
}

export default reducer
