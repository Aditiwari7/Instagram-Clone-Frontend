import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import './LoginPage.css';
import SignIN from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';

import main_image from '../../images/9364675fb26a.svg'
import insta_logo from '../../images/logoinsta.png'
import fb_logo from '../../images/fb.png'
import appStore_logo from '../../images/app.png'
import playStore_logo from '../../images/play.png'

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state = { 
            isLogin: true
        }
    }

    changeLogin= () => {
        if(this.state.isLogin){
            this.setState({isLogin: false});
        }else{
            this.setState({isLogin: true});
        }
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="main-container">
                            <div>
                                <img src={main_image} width="454px"/>
                            </div>
                            <div>
                                <div className="rightcomponent">
                                    <img className="lp_logo" src={insta_logo}/>
                                    <div className="lp_signin">
                                        {
                                            this.state.isLogin ? <SignIN/> : <SignUp/>
                                        }
                                        <div className="login_ordiv">
                                            <div className="login_dividor"></div>
                                            <div className='login_or'>OR</div>
                                            <div className="login_dividor"></div>
                                        </div>

                                        <div className='login_fb'>
                                            <img src={fb_logo} width="15px" style={{ "marginRight":"5px" }}/>Login with Facebook
                                        </div>
                                        <div className='login_forget'>Forgot password?</div>
                                    </div>
                                </div>
                                <div className='lp_signin_option'>
                                    {
                                        this.state.isLogin ? 
                                        <div className='lp_signin'>
                                            Don't have an account ? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign Up</span>
                                        </div> : 
                                        <div className='lp_signup'>
                                            Have an account? <span onClick={this.changeLogin} style={{ "fontWeight":"bold", "color":"#0395F6"}}>Sign In</span>
                                        </div>
                                    }
                                </div>

                                <div className='lp_downloadSection'>
                                    <div>Get the app.</div>
                                    <div className='lp_option'>
                                        <img className='lp_dimg' src={appStore_logo} width="136px"/>
                                        <img className='lp_dimg' src={playStore_logo} width="136px"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        )
    }
}
 export default LoginPage;