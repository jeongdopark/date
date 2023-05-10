import styled from 'styled-components'
import { StyledCommonContainer } from '../../style/common.styled'

const Container = styled(StyledCommonContainer)`
  background-color: antiquewhite;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 70px;
`

export const S = {
  Title,
  Container,
}
