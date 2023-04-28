import styled from 'styled-components'

export const CardItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    padding: 10px 20px;
    width: 280px;
    height: 140px;
    margin-bottom: 10px;
    margin-right: 15px;
  }

  border: 2px solid #cbd5e1;
  border-radius: 8px;
`

export const Header = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`
export const Description = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 12px;
  overflow-wrap: break-word;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  margin-top: 0px;
`
