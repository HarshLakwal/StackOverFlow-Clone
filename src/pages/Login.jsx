import React from 'react'
import AppUrl from '../AppUrl';
import {Redirect} from 'react-router-dom'
import UserHome from '../UsersPages/UserHome';
export default class Login extends React.Component {
    constructor(){
        super()
        this.state={
            Loginmsg:'',
            LoginStatus:false,
            
        }
    }
    userLogin =()=>{
        var email = this.email.value;
        var password = this.pwd.value;
        var data = {
            email:email,
            password:password
        }
        fetch(AppUrl.LOGIN_USER,{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        }).then(res=>res.json()).then(result=>{
            console.log(result)
            if(result.status && result.isverify){
                this.setState({LoginStatus:true})
            }
            else{
                if(result.isverify==false){
                    this.setState({Loginmsg:"Pls verify first...!"})
                }
                else{ 
                    this.setState({Loginmsg:'EmailId or password is worng pls try again...'})
                }
                
            }
        })
    }
    render() {
        if(this.state.LoginStatus){
            return <Redirect to="/user/Home"/>
        }
        return (
            <>
                    <div className="container">
                        {this.state.Loginmsg}
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control" ref={b=> this.email = b}  required />
                        
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" ref={b=> this.pwd = b} required />
                    </div>
                    <button onClick={this.userLogin} type="submit" class="btn btn-primary ">Login</button>
                    </div>
            
            </>
        )
    }
}