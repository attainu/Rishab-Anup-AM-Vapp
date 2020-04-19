import initialState from "../state"
import { LOCATION_CHANGE } from 'react-router-redux';

export function userReducer(state = initialState.userData, action) {

    let stateCopy = { ...state }
    switch (action.type) {
        case "authenticate_user":
            let { name, email, userName, avatar, id } = action.payLoad;
            stateCopy = { name, email, userName, avatar, id }
            return stateCopy;

        case LOCATION_CHANGE: {
            return stateCopy;
        }

        default:
            return stateCopy;
    }
}