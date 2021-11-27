import React from 'react'
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Register from '../src/pages/Register'
import Login from '../src/pages/Login'
import About from '../src/pages/About'
import Navbar from '../src/pages/Navbar'
import UserHome from '../src/UsersPages/UserHome'
import AskQueries from '../src/UsersPages/AskQueries'
import UserQuery from '../src/UsersPages/UserQuery';
import MyProfile from './UsersPages/Myprofile';

export default class App extends React.Component {
  render() {

    return (
      <>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Register" component={Register} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/About" component={About} />

          <Route exact path="/user/Home" component={UserHome} />
          <Route exact path="/user/AskQueries" component={AskQueries}/>
          <Route exact path="/user/UserQuery" component={UserQuery}/>
          <Route exact path="/user/MyProfile" component={MyProfile}/>
        </Switch>
      </>
    )
  }
}
