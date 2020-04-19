import React from 'react';

import './App.css';
import Home from "./components/home"
import Register from "./components/register"
import Login from "./components/login"
import Uploader from "./components/VideoUploader/index"
import Player from "./components/player"
import Profile from "./components/profile"

import Subscribed from "./components/subscribed"
import Subscribers from "./components/subscribers"

// import HeaderNav from './containers/HeaderNav/HeaderNav';
// import { SideBar } from './containers/SideBar/SideBar';
// import { VideoGrid } from './components/VideoGrid/VideoGrid'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SidebarExampleTarget from "./components/sidebar"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <SidebarExampleTarget/>
          {/* <Switch> */}
            <Route path="/" exact component={Home}>
            </Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/signup" exact component={Register}></Route>
            <Route path="/upload" exact component={Uploader}></Route>
            <Route path="/player" exact component={Player}></Route>
            <Route path="/profile" exact component={Profile}></Route>

            <Route path="/subscribed" exact component={Subscribed}></Route>
            <Route path="/subscribers" exact component={Subscribers}></Route>
          
          
          
          {/* </Switch> */}

        </div>
      </Router>
    )
  }
}




export default App;
