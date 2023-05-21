import styled from 'styled-components'
import {
  StyledCommonFormContainer,
  StyledCommonInput,
  StyledCommonTitle,
  StyledCommonButton,
} from '../style/common.styled'

const FormContainer = styled(StyledCommonFormContainer)`
  span {
    height: 20px;
    margin-bottom: 20px;
    color: red;
  }
`
const Title = styled(StyledCommonTitle)`
  margin-bottom: 10px;
  margin: 0 auto;
`
const Input = styled(StyledCommonInput)`
  margin-bottom: 10px;
  border: 1px solid black;
  width: 50%;
  margin: 0 auto;
`
const Button = styled(StyledCommonButton)`
  margin: 0 auto;
  margin-bottom: 20px;
  width: 50%;
  border-radius: 10px;
  border: none;
  box-shadow: 0 0px 100px rgba(0, 0, 0, 0.1);
  border: 1px solid gainsboro;
`
const WarnMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  font-size: 13px;
`

const ImgContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;

  div {
    margin-bottom: 30px;
    text-align: center;
    margin-top: 15px;
  }
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`

const EditContainer = styled.div`
  display: flex;
  align-items: center;

  button {
    width: 150px;
    height: 40px;
    border-radius: 10px;
    margin-bottom: 20px;
    border: none;
    cursor: pointer;
  }
`

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100vh;
`

const ModalInnerContainer = styled.div`
  position: absolute;
  top: calc(50vh - 200px);
  left: calc(50vw - 200px);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 400px;
  height: 400px;
  flex-direction: column;
`

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 50px;
  padding: 0px 50px;
  background-color: white;
`

export const S = {
  FormContainer,
  Title,
  Input,
  Button,
  WarnMessage,
  ImgContainer,
  Img,
  EditContainer,
  ModalContainer,
  ModalInnerContainer,
  FooterContainer,
}
