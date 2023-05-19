import { useRef, useState, useCallback } from 'react'

export const useValidate = () => {
  const [inputValue, setInputValue] = useState({
    nickname: '',
    userId: '',
    password: '',
  })
  const message = useRef({
    value: {
      nickname: '',
      userId: '',
      password: '',
    },
  })

  const validator = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      setInputValue({ ...inputValue, [name]: value })

      switch (name) {
        case 'userId':
          if (value.length < 4 && value.length !== 0) {
            message.current.value[
              name
            ] = `${name}는 4자 이상으로 입력해 주세요.`
          } else {
            message.current.value[name] = ''
          }
          break
        case 'password':
          if (value.length < 4 && value.length !== 0) {
            message.current.value[
              name
            ] = `${name}는 4자 이상으로 입력해 주세요.`
          } else {
            message.current.value[name] = ''
          }
          break
        case 'nickname':
          if (value.length < 4 && value.length !== 0) {
            message.current.value[
              name
            ] = `${name}는 4자 이상으로 입력해 주세요.`
          } else {
            message.current.value[name] = ''
          }
          break
      }
    },
    [inputValue],
  )

  return [inputValue, validator, message] as const
}
