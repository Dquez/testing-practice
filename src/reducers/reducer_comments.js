import {SAVE_COMMENT, FETCH_COMMENTS} from "../actions";
// import _ from "lodash";
// state argument is not application state, only the state this reduce is responsible for
export default function (state = [], action) {
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
        case FETCH_COMMENTS:
            return state;
        default:
            return state;
    }
}