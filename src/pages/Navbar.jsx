import React from 'react'
import { NavLink } from 'react-router-dom'
import AppUrl from '../AppUrl'
import {Redirect} from 'react-router-dom'
class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            islogin: true,
            islogout:false,
            pic:undefined
        }
        setInterval(this.checksession, 1000)
    }
    checksession = () => {
        fetch(AppUrl.CHECK_SESSION).then(res => res.json()).then(result => {
            console.log(result)
            this.setState({ islogin: result.status, pic:result.pic })
        })
    }
    logout=()=>{
       fetch(AppUrl.ISLOGOUT).then(res =>res.json()).then(result=>{
           this.setState({islogin:false,islogout:true,pic:undefined})
       })
    }
    myprofile=(event)=>{
        
        fetch(AppUrl.MY_PROFILE_INFO).then(res=> res.json()).then(result=>{

        })
    }
    render() {
        var logo =" "
        if(this.state.pic==undefined){
           logo = <NavLink className="nav-link" to="/"> StackoverFlow</NavLink>
        }
        else{
            logo =<img src={this.state.pic} alt="img" height="50" width="50"/>
        }

        if(this.state.islogout){
            <Redirect to="/"/>
        }
        var menu = undefined
        if (this.state.islogin==true) {
            menu = <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user/Home"> UserHome</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user/AskQueries"> AskQueries</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user/UserQuery"> UserQuery</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/user/MyProfile">MyProfile</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Logout" onClick={this.logout}> Logout</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/About"> About</NavLink>
                </li>
            </ul>
        }
        else {
           menu= <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/"> Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Register"> Register</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/Login"> Login</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/About"> About</NavLink>
                </li>
            </ul>
        }
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        
                        {logo}

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {menu}
                            <div class="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
export default Navbar;