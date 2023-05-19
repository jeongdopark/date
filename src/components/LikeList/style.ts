import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 30px;
`

const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 50px;
  padding: 15px;
  border: 1px solid black;
  margin-bottom: 10px;
  width: 90%;
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 20%;
  justify-content: space-around;
`

export const S = { Container, Element, UserInfo }
