import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { gql, useMutation } from '@apollo/client';

function RegisterForm(props){
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChange = (event) =>{
        setValues({...values,[event.target.name]:event.target.value})
    }

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(_, result){
            console.log(result);
            //this is from the tutorial, but registerform is a part of '/'
            //instead, change rendering condition of <Home /> to show dashboard
            // props.history.push('/')

        },
        onError(err){
            console.log(err.graphQLErrors[0].extensions.exception.errors)
            setErrors(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables:values
    })

    const onSubmit = (event) =>{
        event.preventDefault();
        addUser();
    }

    return(
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Create New Account
                </Modal.Title>
            </Modal.Header>
            
            <Modal.Body>
            <Form onSubmit={onSubmit} noValidate>

                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control 
                        type="username" 
                        name="username" 
                        placeholder="Enter username" 
                        value={values.username}
                        error={errors.username ? true : false}
                        onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        name="email" 
                        placeholder="Enter email" 
                        value={values.email} 
                        error={errors.email ? true : false}
                        onChange={onChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={values.password}
                        error={errors.password ? true : false} 
                        onChange={onChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control 
                        type="confirmPassword" 
                        name="confirmPassword" 
                        placeholder="Confirm password" 
                        value={values.confirmPassword}
                        error={errors.confirmPassword ? true : false} 
                        onChange={onChange}/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Register
                </Button>

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
            </Modal.Body>

        </Modal>
    )
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;

export default RegisterForm; 