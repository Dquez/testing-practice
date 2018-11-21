import React, {Component} from "react";
import {connect} from "react-redux";
export default function (ChildComponent){
    class ComponsedComponent extends Component {
        // Component just got rendered
        componentDidMount(){
            this.shouldNavigateAway()
        }
        
        // our component just got updated
        componentDidUpdate(){
            this.shouldNavigateAway();
        }

        shouldNavigateAway (){
            !this.props.auth && this.props.history.push('/')
        }

        render(){
            return <ChildComponent {...this.props} />
        }
    }
    function mapStateToProps(state){
        return {auth: state.auth}
    }

    return connect(mapStateToProps)(ComponsedComponent)
}


