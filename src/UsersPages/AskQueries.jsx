import React from 'react'
import AppUrl from '../AppUrl';
import QueryTable from './QueryTable'
import Navbar from '../pages/Navbar'
import "../Query.css"
export default class AskQueries extends React.Component {
    constructor() {
        super()
        this.state = {
            queries: []
        }
        this.loadQuery()
    }
    loadQuery = () => {
        fetch(AppUrl.LOAD_QUERY).then(response => response.json()).then(result => {
            this.setState({ queries: result })
        });
    }
    saveQuery = () => {
        var topic = this.topic.value;
        var askquery = this.askquery.value;
        var data = {
            topic: topic,
            askquery: askquery
           
        }
        fetch(AppUrl.SAVE_QUERY, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {

            if (result.status == true) {
                this.setState({ query: "Your query is saved...!" })
            }
            else {
                this.setState({ query: "Something is fishey!" })
            }
            this.topic.value = "";
            this.askquery.value = "";

        });
        
    }
    render() {

        return (
            <>
            
                <div class="mb-3 ">
                    <label class="form-label">Query Topic</label>
                    <input type="text" class="form-control" ref={a => this.topic = a} placeholder="exmaple: javascript" required />
                </div>
                <div class="mb-3">
                    <label class="form-label">Ask Query</label>
                    <textarea class="form-control" rows="3" ref={a => this.askquery = a} required></textarea>
                </div>
                <div >
                    <button type="submit" className="button" onClick={this.saveQuery}>Send</button> <b className="text-success">{this.state.query}</b>
                </div>
                <hr />
                <div className="container">
                    <table className="table" >

                        <tr>
                            <th scope="col">Sno.</th>
                            <th scope="col">Topic</th>
                            <th scope="col">Your_Query</th>
                            <th scope="col">Option</th>
                        </tr>

                        {this.state.queries.map((rec, index) => {
                            return (<>
                                <QueryTable index={index + 1} record={rec} />
                                {/* <Navbar record={rec}/> */}

                            </>)
                        })}
                    </table>
                </div>
            </>
        )
    }
}