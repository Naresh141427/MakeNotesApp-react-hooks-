import styled from 'styled-components'

export const App = styled.div`
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
`
export const Title = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 40px;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 55px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  width: 60%;
  max-width: 500px;
  @media screen and (min-width: 768px) {
    max-width: 1000px;
  }

  border-radius: 10px;

  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);

  padding: 20px;
`

export const TitleInput = styled.input`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;

  width: 90%;
  max-width: 300px;

  @media screen and (min-width: 768px) {
    max-width: 680px;
  }

  padding: 10px;

  outline: none;
  border: none;

  margin-bottom: 25px;
`
export const TitleNotes = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 800px;

  padding-left: 10px;

  width: 90%;
  max-width: 300px;

  @media screen and (min-width: 768px) {
    max-width: 680px;
  }

  outline: none;
  border: none;
`

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
`
export const AddButton = styled.button`
  color: #fff;
  background-color: #4c63b6;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 600;

  border: none;
  border-radius: 3px;
  outline: none;
  cursor: pointer;

  padding: 10px 20px;

  @media screen and (min-width: 768px) {
    padding: 15px 30px;
  }
`
export const NotesList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;

  width: 60%;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }

  margin-top: 30px;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50%;
  height: 350px;

  margin-top: 30px;
`

export const Image = styled.img`
  height: 80px;
  width: 80px;

  @media screen and (min-width: 768px) {
    height: 150px;
    width: 150px;
  }
`

export const EmptyHeader = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;

  @media screen {
    font-size: 25px;
  }
`

export const EmptyParagraph = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 15px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  margin-top: 0px;
`
