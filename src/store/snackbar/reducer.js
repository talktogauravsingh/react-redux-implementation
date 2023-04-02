import {
    SHOW_SNANCKBAR,
    CLEAR_SNACKBAR
} from '../actionType';
const initialState = {
    open: false,
    autoHideDuration: 0,
    severity: 0,
    message: " ",
};
export const snackBarReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_SNANCKBAR:
            return {
                ...state,
                ...action.payload
            }
            case CLEAR_SNACKBAR:
                return initialState;
            default:
                return state;
    }
}