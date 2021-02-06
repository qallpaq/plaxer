const initialState = {
    isFetching: false,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TEST':
            return {
                ...state,
                isFetching: true
            }
        default:
            return state
    }
}

export default reducer
