import React from 'react'
import { S } from '../style'

type ElementType = 'userId' | 'password' | 'nickname'

type WarnMsgType = {
  value: {
    nickname: string
    userId: string
    password: string
  }
}

const FormElement = ({
  inputOnChange,
  type,
  warnMessage,
}: {
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: ElementType
  warnMessage: React.MutableRefObject<WarnMsgType>
}) => {
  const typeObj = {
    userId: {
      title: '아이디',
    },
    password: {
      title: '비밀번호',
    },
    nickname: {
      title: '닉네임',
    },
  }

  return (
    <React.Fragment>
      <S.Title>{typeObj[type].title}</S.Title>
      <S.Input
        name={type}
        onChange={inputOnChange}
        placeholder={`${typeObj[type].title} 입력해 주세요.`}
      />
      <S.WarnMessage>{warnMessage.current.value[type]}</S.WarnMessage>
    </React.Fragment>
  )
}

export default FormElement
