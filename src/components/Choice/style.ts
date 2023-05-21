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
    border-radius: 10px;
  }

  div {
    text-align: center;
    margin-top: 20px;
  }
`

const ButtonContainer = styled.div`
  width: 50%;
  height: 150px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Button = styled.button<{ color: string }>`
  width: 30%;
  height: 50px;
  border-radius: 7px;
  background-color: transparent;
  border: ${(props) =>
    props.color === 'like' ? '1px solid green' : '1px solid red'};
  cursor: pointer;
  box-shadow: 0 0px 100px rgba(0, 0, 0, 0.1);
`

export const S = {
  Container,
  ListElement,
  ButtonContainer,
  Button,
}
