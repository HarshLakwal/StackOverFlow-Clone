import React from 'react'
import AppUrl from '../AppUrl'
import UserRes from '../UsersPages/UserRes'
export default class UserQuery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showOtherQuery: [],
            msg: ""
        }
        this.loadOtherQuery()

    }
    loadOtherQuery = () => {
        fetch(AppUrl.SHOW_OTHER_QUERY).then(res => res.json()).then(result => {
            this.setState({ showOtherQuery: result })
            
        })
    }

    sendResponse = () => {
        var textbox = this.textbox.value
        var data = {
            textbox: textbox
        }
        console.log(this.textbox.value)
        fetch(AppUrl.SEND_RESPONSE, {
            method: 'post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {

            if (result) {
                this.setState({ msg: "Response send successfully...!" })
            }
            else {
                this.setState({ msg: "Something error occure" })
            }
        })
    }


    render() {
        return (
            <>
                <div className="container">
                    <table className="table" >
                        <tr>
                            <th scope="col">Sno.</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Queries</th>
                        </tr>
                        {this.state.showOtherQuery.map((rec, index) => {
                           return(<> 
                                <UserRes index={index+1} rec={rec}/>
                            </>)
                        })}
                    </table>
                </div>
            </>
        )
    }
}