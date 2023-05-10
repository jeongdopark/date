import styled from 'styled-components'
import {
  StyledCommonFormContainer,
  StyledCommonInput,
  StyledCommonTitle,
  StyledCommonButton,
} from '../style/common.styled'

const FormContainer = styled(StyledCommonFormContainer)``
const Title = styled(StyledCommonTitle)`
  margin-bottom: 10px;
`
const Input = styled(StyledCommonInput)`
  margin-bottom: 30px;
`
const Button = styled(StyledCommonButton)`
  margin-bottom: 20px;
`

export const S = {
  FormContainer,
  Title,
  Input,
  Button,
}
