import React from "react";
import {Provider} from "react-redux";
import { createStore } from "redux";
import reducers from "reducers";

export default (props) => {
   return(
     // data returned from reducers acts as redux store
    <Provider store={createStore(reducers, {})}>
        {props.children}
    </Provider>
   )    
}