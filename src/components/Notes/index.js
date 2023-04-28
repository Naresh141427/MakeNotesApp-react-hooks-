import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  App,
  Title,
  Form,
  TitleInput,
  TitleNotes,
  AddButtonContainer,
  AddButton,
  NotesList,
  EmptyContainer,
  Image,
  EmptyHeader,
  EmptyParagraph,
} from './styledComponents'

const Notes = () => {
  const [noteTitle, setNoteTitle] = useState('')
  const [noteComment, setNoteComment] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setNoteTitle(event.target.value)
  }

  const onChangeNote = event => {
    setNoteComment(event.target.value)
  }

  const onSubmitForm = event => {
    event.preventDefault()

    const newNote = {
      id: uuidv4(),
      noteTitle,
      noteComment,
    }

    setNotesList(prevNotesList => [...prevNotesList, newNote])
    setNoteTitle('')
    setNoteComment('')
  }

  return (
    <App>
      <Title>Notes</Title>
      <Form onSubmit={onSubmitForm}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={noteTitle}
          onChange={onChangeTitle}
        />
        <TitleNotes
          type="textarea"
          rows="6"
          placeholder="Take a Note..."
          value={noteComment}
          onChange={onChangeNote}
        />
        <AddButtonContainer>
          <AddButton type="submit">Add</AddButton>
        </AddButtonContainer>
      </Form>
      {notesList.length === 0 ? (
        <EmptyContainer>
          <Image
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt=" notes empty"
          />
          <EmptyHeader>No Notes Yet</EmptyHeader>
          <EmptyParagraph>Notes you add will appear here</EmptyParagraph>
        </EmptyContainer>
      ) : (
        <NotesList>
          {notesList.map(each => (
            <NoteItem notesDetails={each} key={each.id} />
          ))}
        </NotesList>
      )}
    </App>
  )
}

export default Notes
