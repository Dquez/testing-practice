import {CHANGE_AUTH} from "../actions"

export default function (state = false, action) {
    switch(action.type){
        case CHANGE_AUTH:
            return state = action.payload
        default:
            return state;
    }
}