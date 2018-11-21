import React, {Component} from "react";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";
import {Route, Link} from "react-router-dom";
import {connect} from "react-redux";
import {changeAuth} from "../actions";
class App extends Component {
    renderButton(){
        return (
            this.props.auth ? 
            <button className="btn btn-danger" onClick={()=> this.props.changeAuth(false)}>Log Out</button> :
            <button className="btn btn-primary" onClick={()=> this.props.changeAuth(true)}> Login</button>
        )   
        
    }
    renderHeader () {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post a comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }
    render(){
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        )
    }
};


function mapStateToProps(state){
    return {auth: state.auth}
}
// function mapDispatchToProps(){

// }
export default connect(mapStateToProps, {changeAuth})(App);