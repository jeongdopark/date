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
`
const Button = styled(StyledCommonButton)`
  margin-bottom: 20px;
`

const WarnMessage = styled.span``

export const S = {
  FormContainer,
  Title,
  Input,
  Button,
  WarnMessage,
}
