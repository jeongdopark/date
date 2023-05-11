import { useRef, useState, useCallback } from 'react'

export const useValidate = () => {
  const [inputValue, setInputValue] = useState({
    nickname: '',
    email: '',
    password: '',
  })
  const message = useRef({
    value: {
      nickname: '',
      email: '',
      password: '',
    },
  })

  const validator = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = e.target
      setInputValue({ ...inputValue, [name]: value })

      switch (name) {
        case 'email':
          if (value.length < 5 && value.length !== 0) {
            message.current.value[
              name
            ] = `${name}는 5자 이상으로 입력해 주세요.`
          } else {
            message.current.value[name] = ''
          }
          break
        case 'password':
          if (value.length < 5 && value.length !== 0) {
            message.current.value[name] =
              '비밀번호는 5자 이상으로 입력해 주세요.'
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
