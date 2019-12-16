import React, {Component} from "react";
import {Badge, Button} from "react-bootstrap";
import Moment from 'react-moment';
import connection from "../../service/api/connection";
import article from "../../service/api/article";

class Home extends Component{
    state = {
        data: {},
        loading: true
    };

    componentDidMount() {
        connection();
        this.setState({ data : article() })
    }

    render() {
        let articles_show = "";

        if (this.state.loading === false) {
            console.log("Ok");
            console.log(this.state.data);
        }

        return (
            <div>
                <h1>Home</h1>
                <Moment format="YYYY/MM/DD">
                    2019-11-17T12:59-0500
                </Moment>
                <br/>
            </div>
        )
    }
}

export default Home;
