import axios from "axios";
// action creators always have to return an action, and actions always have to have a type property

// variables to be imported and used in our reducers switch statement, instead of hard coding a string
export const SAVE_COMMENT = 'SAVE_COMMENT';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const CHANGE_AUTH = "change_auth";

export function saveComment(comment){
    return {
        type: SAVE_COMMENT,
        payload: comment,
    }
}

export function fetchComments(){
    const request = axios.get("http://jsonplaceholder.typicode.com/comments")
    return {
        type: FETCH_COMMENTS,
        payload: request
    }
}

export function changeAuth(isLoggedIn){
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}