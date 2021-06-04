//Reducer for character information Initialize State
const initState = {
}

//Define Actions
const pathTwoReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_TWOPATH_DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export default pathTwoReducer;
