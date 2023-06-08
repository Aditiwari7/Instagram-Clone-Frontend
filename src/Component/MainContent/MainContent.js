import React, { Component } from "react";
import './MainContent.css'
import Grid from '@mui/material/Grid';
import StatusBar from "../StatusBar/StatusBar"
import MainPage from "../MainPage/MainPage"
import InfoSection from "../InfoSection/InfoSection"
import Suggestions from "../Suggestions/Suggestions"

class MainContent extends Component {
    constructor(props){
        super(props);
        this.state = { }
    }

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={1.5}></Grid>
                    <Grid item xs={6.5} className="maincontent_container">
                        <div>
                            <StatusBar/>
                            <MainPage/>
                        </div>
                    </Grid>
                    <Grid item xs={2.5}>
                        <InfoSection/>
                        <Suggestions/>
                    </Grid>
                    <Grid item xs={1.5}></Grid>
                </Grid>
            </div>
        );
    }
}

export default MainContent;