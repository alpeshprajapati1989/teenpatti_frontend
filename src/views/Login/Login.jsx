import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';
import axios from 'axios';


import avatar from "assets/img/faces/face-3.jpg";
//import request from "../../node_modules/superagent/superagent";
const request = require('superagent');



class Login extends Component {
     constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }
  
     onChangeEmail(event) {
        this.setState({
            email:event.target.value
        });

    }
    onChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    

  submitClick1(){
    var qs = require("querystring");
    var http = require("http");

    var options = {
      "method": "POST",
      "hostname": "127.0.0.1",
      "port": "3000",
      "path": "/api/auth/login/",
      "headers": {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache",
        "postman-token": "f7505fb1-8ad6-175d-9e4b-6c2b4f077c1d"
      }
    };

    var req = http.request(options, function (res) {
      var chunks = [];

      res.on("data", function (chunk) {
        chunks.push(chunk);
      });

      res.on("end", function () {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
      });
});

req.write(qs.stringify({ email: 'alpesh@vmukti.com', password: 'vmukti' }));
req.end();
       
    }

    submitClick(){
        //alert('step1');
         request
          .post('http://localhost:3000/api/auth/login')
          .send({ email: 'alpesh@vmukti.com', password: 'vmukti'})
          .set('Content-Type', 'application/x-www-form-urlencoded')
          .set('Access-Control-Allow-Origin', '*')
          .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
          .set('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
          .set('Access-Control-Allow-Credentials', 'true')
          .withCredentials()
          .end((function(err, res) {
            if(err) {
                alert('yay err ' + err.text);
                throw err;
            }
           // this.setState({ r: res.body.message });
            alert('yay got ' + res.body.message);
        }).bind(this));
         

          //finally go to add user page
          // this.props.history.push("/user");

          //alert('email '+ this.state.email + ' password: ' + this.state.password)
       
    }

    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Login"
                                content={
                                    <form>
                                        <input type="text" placeholder="Email" onChange={this.onChangeEmail.bind(this)}/>
                                         <br /><br />
                                        <input type="text" placeholder="Password" onChange={this.onChangePassword.bind(this)}/>
                                         <br /><br />
                                        <input type="submit" value="Submit" onClick={this.submitClick.bind(this)}/>
                                         <br /><br />
                                        <div className="clearfix"></div>
                                    </form>
                                }
                            />
                        </Col>
                        
                    </Row>
                </Grid>>
            </div>
        );
    }
}

export default Login;
