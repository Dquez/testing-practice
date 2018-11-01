import React, {Component} from "react";
// import {fetchComments} from "actions";
import {connect} from "react-redux";

class CommentList extends Component {

    renderComments = () =>{ 
        if(this.props.comments.length > 0){
            return(
                this.props.comments.map((comment,i)=>{
                    return(
                        <li key={i}>{comment}</li>
                    )
                })
            ) 
        }
        return <div>No comments yet</div>
    }
    render(){
        return(
            <div>
 
                    <ul>
                        {this.renderComments()}
                    </ul>
            </div>
          

        )
    }
}



function mapStateToProps({comments}){
    return {comments};
  }
  

  export default connect(mapStateToProps)(CommentList);