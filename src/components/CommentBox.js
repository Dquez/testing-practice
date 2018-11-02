import React, {Component} from "react";
import {saveComment, fetchComments} from "actions";
import {connect} from "react-redux";

class CommentBox extends Component {
    state = {
        comment: ""
    }
    // componentDidMount(){
    //     this.props.fetchComments();
    // }
    handleInputChange = (event) =>{
        const {value} = event.target;
        this.setState({
            comment: value
        })
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        const {comment} = this.state;
        this.setState({comment: ""})
        this.props.saveComment(comment);
    }
    render(){
        return(
            <div>
                 <form onSubmit={this.handleSubmit} className="form-group">
                    <h4>Add a comment</h4>
                    <textarea onChange={this.handleInputChange} value={this.state.comment}/>
                    <div>
                        <button  className="btn btn-primary" type="submit">Submit comment</button>
                        
                    </div>
                </form>
                <button className="btn btn-success fetch-comments" onClick={this.props.fetchComments}>Fetch comments</button>
            </div>
               
        )
    }
}

  export default connect(null, {saveComment,fetchComments})(CommentBox);