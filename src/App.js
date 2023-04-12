import { BrowserRouter , Route , Routes} from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Login from "./components/login/Login";
import React, {useEffect} from 'react';
// import Header from './components/Header';
import {getUserAuth} from "./actions"
import { connect } from 'react-redux';

import Jobs from './components/jobs/Jobs';
import Messaging from './components/messaging/Messaging';
import Notifications from './components/notification/Notifications';
import Hiring from './components/hiring/Hiring';
import MyNetwork from './components/mynetwork/MyNetwork';

function App(props) { 
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/home/mynetwork" element={<MyNetwork/>}/>
        <Route exact path="/home/jobs" element={<Jobs/>}/>
        <Route exact path="/home/messaging" element={<Messaging/>}/>
        <Route exact path="/home/notifications" element={<Notifications/>}/>
        <Route exact path="/home/hiring" element={<Hiring/>}/>
    </Routes>
      
    </BrowserRouter>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
