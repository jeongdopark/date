import styled from 'styled-components'
import {
  StyledCommonContainer,
  StyledCommonButton,
} from '../style/common.styled'

const Container = styled(StyledCommonContainer)`
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 40px;
`

const Button = styled(StyledCommonButton)`
  margin-bottom: 20px;
  height: 50px;
`

export const S = {
  Title,
  Container,
  Button,
}
