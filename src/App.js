import { BrowserRouter , Route , Routes} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from "./components/Login";
import React, {useEffect} from 'react';
// import Header from './components/Header';
import {getUserAuth} from "./actions"
import { connect } from 'react-redux';
import MyNetwork from './components/MyNetwork';
import Jobs from './components/Jobs';
import Messaging from './components/Messaging';
import Notifications from './components/Notifications';
import Hiring from './components/Hiring';

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
