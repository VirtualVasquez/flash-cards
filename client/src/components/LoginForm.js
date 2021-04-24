import React, {useState, useContext} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { gql, useMutation } from '@apollo/client';


import RegisterForm from './RegisterForm'
import {AuthContext} from '../context/auth'
import {useForm} from '../util/hooks'

function LoginForm(){
    const context = useContext(AuthContext);
    const [showCreateAccount, setShowCreateAccount] = React.useState(false);//for modal
    const [errors, setErrors] = useState({});
    
    const {onChange, onSubmit, values} = useForm(loginUserCallback, {
        username:'',
        password:''
    })
    // const [loginUser, {loading}] = useMutation(LOGIN_USER, {
    const [loginUser] = useMutation(LOGIN_USER, {
        update(_, {data:{login:userData}}) {
            console.log(userData);
            context.login(userData)
        },
        onError(err){
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables:values
    })

    function loginUserCallback(){
        loginUser();
    }

    return(
        <Container className="wrapper">
        <Jumbotron className="text-center" >
            <h1>Flash Cards</h1>
            <hr className="solid"></hr>
            <br></br>
            <br></br>
            <Form onSubmit={onSubmit} noValidate>                
                <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={{span:1, offset:3}}>Username</Form.Label>
                    <Col sm={5}>
                        <Form.Control 
                            type="username" 
                            name="username"
                            placeholder="Enter username"
                            value={values.username}
                            error={errors.username ? true : false}
                            onChange={onChange}    
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={{span:1, offset:3}}>Password</Form.Label>
                    <Col sm={5}>
                        <Form.Control 
                            type="password" 
                            name="password"
                            placeholder="Password" 
                            value={values.password}
                            error={errors.password ? true : false}
                            onChange={onChange}
                        />
                    </Col>
                </Form.Group>
                <br></br>
                <Form.Group as={Row}>
                    <Col sm={{span:6, offset:3}}>
                        <Button className="login-form-button" type="submit" variant="primary">Login</Button>
                        <Button className="login-form-button" variant="success" onClick={() => setShowCreateAccount(true)}>Create Account</Button>
                        <RegisterForm 
                            show={showCreateAccount}
                            onHide={() => setShowCreateAccount(false)}
                            setShowCreateAccount={setShowCreateAccount}
                        />
                    </Col>
                </Form.Group>

                {Object.keys(errors).length > 0 && (
                    <div className="error message">
                        <ul className="list">
                            {Object.values(errors).map(value=>(
                                <li key={value}>{value}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </Form>
            <br></br>
            <br></br>

        </Jumbotron>
        </Container>
    )
}

const LOGIN_USER = gql`
  mutation login($username: String! $password: String!) {
    login( username: $username password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default LoginForm; 