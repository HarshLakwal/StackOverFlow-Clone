import React from 'react'
import AppUrl from '../AppUrl'
import "../Query.css"
export default class UserRes extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            msg:''
        }
    }
    sendRes=()=>{
        var answer = this.answer.value
        var data ={
            answer:answer
        }
        fetch(AppUrl.SEND_RESPONSE,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(data)

        }).then(res=> res.json()).then(result=>{
            if (result.status == true) {
                this.setState({ msg: "Your Response is saved...!" })
            }
            else {
                this.setState({ msg: "Something is fishey!" })
            }
            this.answer.value=""

        })
        
    }
    render() {
        return (
            <>
                <tr>
                    <td>{this.props.index}</td>
                    <td>{this.props.rec.topic}</td>
                    <td>{this.props.rec.askquery}</td>
                    <input type="text" class="form-control" ref={a => this.answer = a}  placeholder="Type Response Here" required />
                    <button type="submit" class="btn btn-primary "onClick={this.sendRes} >Send</button> <b className="text-success">{this.state.msg}</b> 
                </tr>
            </>
        )
    }
}