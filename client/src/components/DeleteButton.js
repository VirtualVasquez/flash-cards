import React from 'react';
import { gql, useMutation } from '@apollo/client';
import {Trash} from 'react-bootstrap-icons'
import Button from 'react-bootstrap/Button'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Form from 'react-bootstrap/Form'
import { FETCH_SUBJECTS_QUERY } from '../util/graphql';

function DeleteButton({subjectId, flashCardId, callback}){

    const mutation = flashCardId ? DELETE_FLASHCARD_MUTATION : DELETE_SUBJECT_MUTATION;

    const [deleteSubjectOrFlashCard, {loading:mutationLoading, error:mutationError}] = useMutation(mutation, {
        update(proxy){
            document.body.click()
            if(!flashCardId){
                const data = proxy.readQuery({
                    query: FETCH_SUBJECTS_QUERY
                })
                //TODO: remove post from cache
                data.getSubjects = data.getSubjects.filter((s) => s.id !== subjectId)
                proxy.writeQuery({query:FETCH_SUBJECTS_QUERY, data})
            }
            if (callback) callback();
        },
        variables:{
            subjectId,
            flashCardId
        }
    })

    const popover = (
        <Popover id="popover-basic">
          <Popover.Title as="h3">Are you sure?</Popover.Title>
          <Popover.Content>
            <Form 
                onSubmit={e => {
                    e.preventDefault();
                    deleteSubjectOrFlashCard();
                }}
            >
              <Button type="submit">Yes</Button>
              <Button variant="secondary" onClick={() => document.body.click()}>No</Button>
            </Form>

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
const DELETE_FLASHCARD_MUTATION = gql`
    mutation deleteFlashcard($flashCardId:ID!, $subjectId:ID!){
        deleteFlashcard(flashCardId:$flashCardId, subjectId: $subjectId){
            id
            flashCards{
                id
                question
                answer
            }
            flashCardCount
        }
    }
`

export default DeleteButton