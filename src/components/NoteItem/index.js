import {CardItem, Header, Description} from './styledComponents'

const NoteItem = props => {
  const {notesDetails} = props
  const {noteTitle, noteComment} = notesDetails

  return (
    <CardItem>
      <Header>{noteTitle}</Header>
      <Description>{noteComment}</Description>
    </CardItem>
  )
}

export default NoteItem
