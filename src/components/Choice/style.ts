import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
`

const ListElement = styled.div`
  width: 200px;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  div {
    text-align: center;
    margin-top: 20px;
  }
`

const ButtonContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    width: 20%;
    height: 70px;
  }
`

export const S = {
  Container,
  ListElement,
  ButtonContainer,
}
