import React from 'react'
import AppUrl from '../AppUrl';
export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            Registeration: ""
        }
    }
    saveuser = () => {
        var name = this.name.value;
        var email = this.email.value;
        var password = this.pwd.value;
        var cpassword = this.cpwd.value;

        var data = {
            name: name,
            email: email,
            password: password
        }
        fetch(AppUrl.SAVE_USER, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(result => {
            
            if (result) {
                this.setState({ Registeration: "Registration Successfully done...!" })
            }
            else {
                this.setState({ Registeration: "Registration Failed please try again..." })
            }

        });
  
    }
    render() {
        return (
            <>
                <div className="container">
                    <b className="text-success text-center">
                        {this.state.Registeration}
                    </b>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Full Name</label>
                        <input type="email" class="form-control" ref={a => this.name = a} />

                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" ref={a => this.email = a} />

                    </div>


                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" ref={a => this.pwd = a} />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Comfirm Password</label>
                        <input type="password" class="form-control" ref={a => this.cpwd = a} />
                    </div>
                    <button type="submit" class="btn btn-primary " onClick={this.saveuser} >Submit</button>

                </div>
            </>
        )
    }
}