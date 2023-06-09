import React, { Component } from "react";
import '../LoginPage/LoginPage.css'
import { storage, auth} from "../firebase"

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = { 
            emailId : null,
            password : null
        }
    }

    login=()=>{
        // auth.signInWithEmailAndPassword(this.state.emailId, this.state.password).then((userCredential) => {
        //     var user = userCredential.user;
        //     localStorage.setItem("users", JSON.stringify(user));
        //     window.location.reload();
        // }).catch((error) => {
        //     var errorCode = error.code;
        //     var errorMsg = error.message;
        // })

        // createUserWithEmailAndPassword(auth, email, password)
        // .then((userCredential) => {
        //     const user = userCredential.user;
        // }).catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        // });
    }

    render() {
        return (
            <div>
                <input className="lp_text" onChange={(event)=>{this.state.emailId=event.currentTarget.value}} type="text" placeholder="Phone number, username or email"/>
                <input className="lp_text lp_pswd" onChange={(event)=>{this.state.password=event.currentTarget.value}} type="password" placeholder="Password"/>
                <button className="login_button" onClick={this.login}>Log In</button>
            </div>
        );
    }
}

export default SignIn;