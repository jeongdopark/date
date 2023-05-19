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
  width: 50%;
`

const TabContainer = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  background-color: aqua;
`

const TabElement = styled.div<{ isSelected: boolean }>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isSelected ? '#adb5bd' : 'white')};
`

const ContentWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
`

export const S = {
  Title,
  Container,
  Button,
  TabContainer,
  ContentWrapper,
  TabElement,
}
