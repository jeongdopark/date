import React from 'react'
import { S } from '../style'
import { PASSWORD } from '../../util/constants'

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
  return (
    <React.Fragment>
      <S.InputContainer>
        <S.Label>{type}</S.Label>
        {type === PASSWORD ? (
          <S.FormInput
            type={PASSWORD}
            name={type}
            onChange={inputOnChange}
            placeholder={`${type} 입력해 주세요.`}
          />
        ) : (
          <S.FormInput
            name={type}
            onChange={inputOnChange}
            placeholder={`${type} 입력해 주세요.`}
          />
        )}
      </S.InputContainer>
      <S.WarnMessage>{warnMessage.current.value[type]}</S.WarnMessage>
    </React.Fragment>
  )
}

export default FormElement
