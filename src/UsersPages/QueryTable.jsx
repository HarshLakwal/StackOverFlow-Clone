import React from 'react'
import AppUrl from '../AppUrl'

export default class QueryTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newQueries: [],
            msg:""
        }
        
    }
    deleteQuery = (event) => {
        var id = event.target.value
        fetch(AppUrl.Delete_Query).then(res => res.json(id)).then(result => {
            this.setState({newQueries:result})
            if(result){
                this.setState({msg:"Query Deleted Successfully"})
            }
            else{
                this.setState({msg:"Something is Wrong"})
            }
        })
    }
    render() {
        return (
            <>
                {this.state.msg}
                <tr>
                    <th>{this.props.index}</th>
                    <th>{this.props.record.topic}</th>
                    <th>{this.props.record.askquery}</th>
                    <th><button type="button" class="btn btn-outline-danger" value={this.props.record._id} onClick={this.deleteQuery}>Delete</button><button type="button" class="btn btn-outline-primary">Update</button></th>
                </tr>
                
            </>

        )
    }
}