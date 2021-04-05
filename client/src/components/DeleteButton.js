import React, {useState, useContext} from 'react';
import { gql, useMutation } from '@apollo/client';
import {Trash} from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'

function DeleteButton({subjectId}){
    const [deleteSubject] = useMutation(DELETE_SUBJECT_MUTATION, {
        update(){
            document.body.click()
            //TODO: remove post from cache
        },
        variables:{
            subjectId
        }
    })

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Are you sure?</Popover.Title>
          <Popover.Content>
              <Button onClick={deleteSubject}>Yes</Button>
              <Button variant="secondary" onClick={() => document.body.click()}>No</Button>
          </Popover.Content>
        </Popover>
      );
    
    return(
        <OverlayTrigger  container={this} trigger="click" placement="right" overlay={popover} rootClose={true}
        >
        <Button variant="danger" >
            <Trash/>
        </Button>
        </OverlayTrigger>
    )

}

const DELETE_SUBJECT_MUTATION = gql`
    mutation deleteSubject($subjectId:ID!){
        deleteSubject(subjectId: $subjectId)
    }
`

export default DeleteButton