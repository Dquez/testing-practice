import { combineReducers } from 'redux';
import CommentsReducer from './reducer_comments';



// link all reducers to a single root reducer, to create the redux store
const rootReducer = combineReducers({
  comments: CommentsReducer
});

export default rootReducer;
