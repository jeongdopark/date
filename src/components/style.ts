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
`
const Input = styled(StyledCommonInput)`
  margin-bottom: 10px;
  border: 1px solid black;
`
const Button = styled(StyledCommonButton)`
  margin-bottom: 20px;
  width: 50%;
`
const WarnMessage = styled.span``

const ImgContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 50px;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const EditContainer = styled.div`
  display: flex;
  align-items: center;
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
}
