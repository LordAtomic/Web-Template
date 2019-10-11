import React, {Component} from "react";
import {Button} from "react-bootstrap";
import Moment from 'react-moment';

class Home extends Component{

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Moment format="YYYY/MM/DD">
                    1976-04-19T12:59-0500
                </Moment>
            </div>
        )
    }
}

export default Home;
