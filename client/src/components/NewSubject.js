import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { gql, useMutation } from '@apollo/client';
import {FETCH_SUBJECTS_QUERY} from '../util/graphql';


// import {AuthContext} from '../context/auth'
import {useForm} from '../util/hooks'

function NewSubject(props){

    const {values, onChange, onSubmit} = useForm(createSubjectCallback, {
        title:''
    })

    const [createSubject, {error}] = useMutation(CREATE_SUBJECT_MUTATION, {
        variables: values,
        update(proxy,result){
            const data = proxy.readQuery({
                query: FETCH_SUBJECTS_QUERY
            })
            let newData = [...data.getSubjects]
            newData = [result.data.createSubject, ...newData];
            proxy.writeQuery({
                query: FETCH_SUBJECTS_QUERY, 
                data: {
                    ...data,
                    getSubjects:{
                        newData,
                    }
                }
            })
            values.body=''
        }
    })

    function createSubjectCallback(){
        createSubject()
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
                    Create A New Subject
                </Modal.Title>
            </Modal.Header>            
            <Modal.Body>
            
            <Form noValidate onSubmit={onSubmit}>

                <Form.Group controlId="formSubjectTitle">
                    <Form.Label>Subject Title</Form.Label>
                    <Form.Control 
                        type="title" 
                        name="title" 
                        placeholder="Enter new title" 
                        onChange={onChange}
                        value={values.body}
                    />
                </Form.Group>

                <Button
                    variant="primary" 
                    type="submit"
                >
                    Create Subject
                </Button>

            </Form>


            </Modal.Body>
        </Modal>
    )
}

const CREATE_SUBJECT_MUTATION = gql`
    mutation createSubject($title: String!){
        createSubject(title: $title){
            id title createdAt username
        }
    }
`

export default NewSubject; 