import React, { Component } from 'react';
import "./StatusBar.css"
import Avatar from '@mui/material/Avatar';

import statusimg from "../../images/pp1.png"
import uploadimg from "../../images/statusadd.png"
import { storage, auth } from "../firebase"

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            statusList: []
        }
    }
    componentDidMount(){
        this.getData();
    }

    getData= () => {
        fetch('http://localhost:8080/status').then(response => response.json()).then(data => {
            this.setStatus({statusList: data});
        });
    }

    uploadStatus = (event) => {
        let image = event.target.files[0];
        const thisContext = this;
        if(image == null || image == undefined) return;

        var uploadTask = storage.ref("status").child(image.name).put(image);
        uploadTask.on(
            "state_changed",
            function(snapshot){},
            function(error){},
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                    console.log(downloadURL);

                    let payload = {
                        "statusId": Math.floor(Math.random()*100000).toString(),
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "path": downloadURL,
                        "timeStamp": new Date().getTime()
                    }

                    const requestOption={
                        method: "POST",
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    }

                    fetch("http://localhost:8080/status", requestOption).then(response => response.json()).then(data => {
                        thisContext.getData();
                    }).catch(error => {
                    
                    })
                });
            }
        );
    }

    render() { 
        return (
            <div>
                <div className='statusbar_container'>
                    <div className='fileupload'>
                        <label for="file-upload-status">
                            <img className='statusbar_upload' src={uploadimg} width="55px" height="55px"/>
                        </label>
                        <input id="file-upload-status" onChange={this.uploadStatus} type="file" />
                    </div>
                    {
                        this.state.statusList.map((item, index) => (
                            <div className='status'>
                                <Avatar className='statusbar_status' src={item.path} />
                                <div className='statusbar_text'>{item.userName}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        );
    }
}
 
export default StatusBar;