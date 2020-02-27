const initialState = {
    selectedFunder: 'FWO'
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_FUNDER":
            return { ...state, selectedFunder: action.payload.funder }
        default:
            return { ...state }
    }
}


export default reducer