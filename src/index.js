import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShoeDometer from './components/ShoeDometer';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navigation/NavBar";
import { BrowserRouter as Router } from "react-router-dom"

ReactDOM.render(
    <Router>
        <ShoeDometer />
    </Router>
    , document.getElementById('root'))
