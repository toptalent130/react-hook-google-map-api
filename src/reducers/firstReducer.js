//Reducer for character information Initialize State
const initState = {
}

//Define Actions
const characterReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_FIRSTPAGE_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default characterReducer;
