import React, { Component } from 'react';
import {
    Grid, Row, Col,
    FormGroup, ControlLabel, FormControl
} from 'react-bootstrap';

import {Card} from 'components/Card/Card.jsx';
import {FormInputs} from 'components/FormInputs/FormInputs.jsx';
import {UserCard} from 'components/UserCard/UserCard.jsx';
import Button from 'elements/CustomButton/CustomButton.jsx';

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
    handleClick = () => {
        this.props.history.push("/admin");
    };
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Add User"
                                content={
                                    <form>
                                        <FormInputs
                                            ncols = {["col-md-4" , "col-md-4" , "col-md-4"]}
                                            proprieties = {[
                                                {
                                                 label : "Username",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Username",
                                                 defaultValue : "",
                                                 disabled : false
                                                },
                                                {
                                                 label : "Password",
                                                 type : "password",
                                                 bsClass : "form-control",
                                                 placeholder : "Paassword",
                                                 defaultValue : ""
                                                },
                                                {
                                                 label : "Confirm Password",
                                                 type : "password",
                                                 bsClass : "form-control",
                                                 placeholder : "Confirm Password"
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols = {["col-md-6" , "col-md-6"]}
                                            proprieties = {[
                                                {
                                                 label : "First name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "First name",
                                                 defaultValue : ""
                                                },
                                                {
                                                 label : "Last name",
                                                 type : "text",
                                                 bsClass : "form-control",
                                                 placeholder : "Last name",
                                                 defaultValue : ""
                                                }
                                            ]}
                                        />
                                        
                                        <FormInputs
                                            ncols = {["col-md-6","col-md-6"]}
                                            proprieties = {[
                                                {
                                                    label : "Email",
                                                    type : "email",
                                                    bsClass : "form-control",
                                                    placeholder : "Email",
                                                    defaultValue : ""
                                                },
                                                {
                                                    label : "Mobile",
                                                    type : "number",
                                                    bsClass : "form-control",
                                                    placeholder : "Mobile",
                                                    defaultValue : ""
                                                }
                                               
                                            ]}
                                        />

                                       
                                         <button onClick={this.handleClick} type="button">
                                        Submit
                                        </button>
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

export default UserProfile;
