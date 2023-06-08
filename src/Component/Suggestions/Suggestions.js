import React, { Component } from 'react';
import "./Suggestions.css"
import Avatar from '@mui/material/Avatar';
import image1 from '../../images/pp1.png'
import image2 from '../../images/pp2.png'


class Suggestions extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() { 
        return (
            <div>
                <div className="suggestions_container">
                    <div className="suggestions_head">
                        <div>Suggestions For You</div>
                    </div>
                    <div className="suggestions_body">
                        <div className="suggestions_friends">
                            <Avatar src={image1} className="suggestions_image"/>
                            <div className="suggestions_username">testing_profile</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={image2} className="suggestions_image"/>
                            <div className="suggestions_username">testing_profile</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={image2} className="suggestions_image"/>
                            <div className="suggestions_username">testing_profile</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={image1} className="suggestions_image"/>
                            <div className="suggestions_username">testing_profile</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={image1} className="suggestions_image"/>
                            <div className="suggestions_username">testing_profile</div>
                        </div>
                        <div className="suggestions_friends">
                            <Avatar src={image2} className="suggestions_image"/>
                            <div className="suggestions_username">testing_profile</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Suggestions;