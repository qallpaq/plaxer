import { teams } from '../data'


const initialState = {
    test: false,
    teams: teams
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
