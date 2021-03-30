import React, {useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { gql, useMutation } from '@apollo/client';

// import {AuthContext} from '../context/auth'
// import {useForm} from '../util/hooks'

function SubjectForm(props){

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
            <Form noValidate>

                <Form.Group controlId="formSubjectTitle">
                    <Form.Label>Subject Title</Form.Label>
                    <Form.Control 
                        type="title" 
                        name="title" 
                        placeholder="Enter new title" 
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

export default SubjectForm; 