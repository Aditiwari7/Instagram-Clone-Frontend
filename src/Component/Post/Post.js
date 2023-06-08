import React, { Component } from 'react';
import "./Post.css"
import Avatar from '@mui/material/Avatar';
import postimage from "../../images/post.jpg";
import like from "../../images/love.svg"
import comment from "../../images/comment.svg"
import share from "../../images/share.svg"

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentList : []
        }
    }

    componentDidMount(){
        this.getComments();
    }
    
    getComments=()=>{ //API backend
        
        fetch('http://localhost:8080/comments/'+this.props.id).then(response => response.json()).then(data => {
                this.setState({commentList: data});
        });
    }

    submitComments =(event) =>{
        if(event.key == "Enter") {
            let comment=event.currentTarget.value;
            if(comment!= null || comment!=undefined) {

                let payload = {
                    "commentId": Math.floor(Math.random()*1000000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postId": this.props.id,
                    "timeStamp": new Date().getTime(),
                    "comment": comment
                }
    
                const requestOptions ={
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body : JSON.stringify(payload),
                }
    
                fetch("http://localhost:8080/comments",requestOptions).then(response => response.json()).then(data => {
                    this.getComments();
                })
                .catch(error =>{
    
                })
            }
        }
    }

    render() { 
        return (
            <div className="post_container">
                {/* Head */}
                <div className="post_head">
                    <Avatar className="post_image" src="" />
                    <div className="post_username">{this.props.userName}</div>
                </div>
            
                {/* Image */}
                <div>
                    <img src={this.props.postImage} width="615px" /> 
                </div>
            
                {/* Analytics */}
                <div>
                    <div style={{"marginLeft":"10px"}}>
                        <img src={like} className="post_reaction"/>
                        <img src={comment} className="post_reaction"/>
                        <img src={share} className="post_reaction"/>
                    </div>
                    <div style={{ "fontWeight":"bold", "marginLeft":"20px" }}>
                        {this.props.likes} likes     
                    </div>
                </div>

                {/* Comment Section */}
                <div>
                    {
                        this.state.commentList.map((item,index)=>(
                            index < 4 ? <div className="post_comment">{item.userName}: {item.comment}</div> :<span></span>
                        ))
                    }
                    <input text="text" onKeyPress={this.submitComments} className="post_commentbox" placeholder="Add a comment..." />
                </div>
            </div> 
        );
    }
}
 
export default Post;
