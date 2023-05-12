import styled from 'styled-components'
import {
  StyledCommonContainer,
  StyledCommonButton,
} from '../style/common.styled'

const Container = styled(StyledCommonContainer)`
  background-color: antiquewhite;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 40px;
`

const Button = styled(StyledCommonButton)`
  margin-bottom: 20px;
`

export const S = {
  Title,
  Container,
  Button,
}
