import { combineReducers } from 'redux';
import commentsReducer from './reducer_comments';



// link all reducers to a single root reducer, to create the redux store
const rootReducer = combineReducers({
  comments: commentsReducer
});

export default rootReducer;
