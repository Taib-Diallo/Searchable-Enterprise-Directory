import styled from 'styled-components';
import devices from '../../devices/devices';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1450px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`

export const Content = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Profile = styled.img`
  width: 10em;
  height: 10em;
  @media ${devices.tablet} {
    justify-self: center;
    grid-column: 1;
    width: 13rem;
    height: 13rem;
  }
`

export const AboutMe = styled.div`
  font-family: Oswald, monospace;
  font-size: 1.1rem;
  @media ${devices.tablet} {
    grid-row: 1 / -1;
    grid-column: 2;
    width: 90%;
  }
`

export const Interests = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    grid-row-start: 2;
    grid-column: 1 / 2;
  }
`

export const InterestItem = styled.div`
  margin: 0.3rem;
  @media ${devices.tablet} {
    grid-row: 2;
    grid-column: 2 / -1;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  background-color: #F3F3F3;
`

export const TableHeader = styled.th`
  border: 1px solid black;
  padding: 10px;
`

export const TableData = styled.td`
  border: 1px solid black;
  padding: 10px;
`

export const TellMeButton = styled.button`
  width: 7rem;
  height: 2rem;
  cursor: pointer;
  border-radius: 8px;
  box-shadow: 0 6px #969696;
  color: #ffffff;
  background-color: red;
  border: 1px solid #000000;
  font-weight: bold;
  margin-top: 1rem;
  &:active {
    transform: scale(0.96);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.25);
`

export const TellMe = styled.div`
  margin: 0.5rem;
  display: flex;
  align-items: center;
  font-size: medium;
`

export const Label = styled.label`
  color: red;
  margin-bottom: 0.5rem;
`

export const Input = styled.input`
  height: 2.5rem;
  border: 0.5px solid blue;
  border-radius: 10px;
  width: 100%;
  padding: 0.7rem;
  font-size: medium;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 1450px) {
    margin-left: 10%;
    margin-right: 10%;
  }
`
