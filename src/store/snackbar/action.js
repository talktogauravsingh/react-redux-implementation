import {SHOW_SNANCKBAR, CLEAR_SNACKBAR} from '../actionType';

export const showSnackBar = (data) => {
    return {
        type : SHOW_SNANCKBAR,
        payload : data
    }
}

export const clearSnackBar = () => {
    return {
        type : CLEAR_SNACKBAR
    }
}