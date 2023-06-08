import React, { Component } from 'react';
import "./NavBar.css"
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';

import insta_logo from '../../images/logoinsta.png'
import home from "../../images/home.svg"
import message from "../../images/message.svg"
import find from "../../images/find.svg"
import reaction from "../../images/love.svg"
import pp from "../../images/pp1.png"

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className='navbar_content'>
                    <Grid container>
                        <Grid item xs={1.5}></Grid>

                        <Grid item xs={3.5}>
                            <img className='navbar_logo' src={insta_logo} width="105px"/>
                        </Grid>

                        <Grid item xs={3}>
                            <input text="text" className='nb_searchbar' placeholder='Search'/>
                        </Grid>
                        
                        <Grid item xs={3} style={{ "display":"flex"}}>
                            <img className='navbar_img' src={home} width="25px"/>
                            <img className='navbar_img' src={message} width="25px"/>
                            <img className='navbar_img' src={find} width="25px"/>
                            <img className='navbar_img' src={reaction} width="25px"/>
                            <Avatar src={pp} className='navbar_img' style={{ "maxWidth":"25px", "maxHeight":"25px" }}/>
                        </Grid>
                        <Grid item xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}
 
export default NavBar;