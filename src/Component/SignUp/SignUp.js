import React, { Component } from "react";
import "./SignUp.css";
import { storage, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            emailId : null,
            name: null,
            userName: null,
            password: null
        }
    }

    userSignUp = () => {
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then(userCredential => {
            var user = userCredential.user;

            let payload = {
                "userId": user.uid,
                "userName": this.state.userName,
                "name": this.state.name,
                "profileImage": ""
            }

            const requestOptions ={
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body : JSON.stringify(payload),
            }

            fetch("http://localhost:8080/users",requestOptions).then(response => response.json()).then(data => {
                localStorage.setItem("users",JSON.stringify(user));
                window.location.reload();
            }).catch(error =>{

            })
        }).catch((error) => {
            var errorCode = error.code;
            var errorMsg = error.message;
        });
    }
    
    render() { 
        return (
            <div>
                <input className="lp_text" onChange={(event)=>{this.state.emailId=event.currentTarget.value;}} type="text" placeholder="Phone number, username or email"/>
                <input className="lp_text" onChange={(event)=>{this.state.name=event.currentTarget.value;}} type="text" placeholder="Full Name"/>
                <input className="lp_text" onChange={(event)=>{this.state.userName=event.currentTarget.value;}} type="text" placeholder="Username"/>
                <input className="lp_text lp_pswd" onChange={(event)=>{this.state.password=event.currentTarget.value;}}type="password" placeholder="Password"/>
                <button className="login_button" onClick={this.userSignUp}>Sign Up</button>
            </div>
        );
    }
}
 
export default SignUp;