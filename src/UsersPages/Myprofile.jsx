import React from 'react'
import axios from 'axios'
import AppUrl from '../AppUrl'
export default class MyProfile extends React.Component {
    constructor() {
        super()
    }
    upload=()=>{
        var filebox = this.filebox.files[0]
        const dataArray = new FormData()
        dataArray.append('uploadfile',filebox)
        axios.post(AppUrl.UPLOAD_FILE,dataArray,{
            headers:{"Content-Type":"multipart/form-data"}
        }).then(res=>{
            console.log(res)
        })

    }
    render() {
        return (
            <>
                <div className="container">
                    <div class="input-group input-group-sm mb-3">
                        <input type="file" class="form-control" ref={ a=> this.filebox = a} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.upload}>Upload</button>
                    </div>
                </div>
            </>
        )
    }
}