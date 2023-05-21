import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`

const Element = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 15px;
  border: none;
  border-radius: 7px;
  margin-bottom: 10px;
  width: 90%;
  box-shadow: 0 0px 70px rgba(0, 0, 0, 0.1);
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  width: 25%;
  justify-content: space-around;
`

const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`

const Nickname = styled.div`
  margin-left: 30px;
  display: flex;
  align-items: center;
`

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0px;
  margin: 0px;
  cursor: pointer;
  user-select: none;
  height: 80%;
  vertical-align: middle;
  appearance: none;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  padding: 5px 15px;
  border-radius: 4px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border: 1px solid rgba(211, 47, 47, 0.5);
  color: rgb(211, 47, 47);

  &:hover {
    text-decoration: none;
    background-color: rgba(211, 47, 47, 0.04);
    border: 1px solid rgb(211, 47, 47);
  }
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

export const S = {
  Container,
  Element,
  UserInfo,
  Img,
  Nickname,
  Button,
  TabContainer,
  TabElement,
}
