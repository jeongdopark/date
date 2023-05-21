import { useRef, useState, useCallback } from 'react'
import { NICKNAME, PASSWORD, USER_ID } from '../util/constants'

export const useValidate = () => {
  const [valid, setValid] = useState<boolean>(true)
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
        case USER_ID:
          if (
            (value.length < 3 && value.length !== 0) ||
            value.length > 10 ||
            /[~!@#$%^&*()_+|<>?:{}]/.test(value)
          ) {
            message.current.value[
              name
            ] = `${name}는 3글자 - 10글자여야 하며, 특수문자 ❌`
            setValid(true)
          } else {
            message.current.value[name] = ''
            setValid(false)
          }
          break
        case PASSWORD:
          if (
            (value.length < 3 && value.length !== 0) ||
            value.length > 10 ||
            /[~!@#$%^&*()_+|<>?:{}]/.test(value)
          ) {
            message.current.value[
              name
            ] = `${name}는 3글자 - 10글자여야 하며, 특수문자 ❌`
            setValid(true)
          } else {
            message.current.value[name] = ''
            setValid(false)
          }
          break
        case NICKNAME:
          if (
            (value.length < 3 && value.length !== 0) ||
            value.length > 10 ||
            /[~!@#$%^&*()_+|<>?:{}]/.test(value)
          ) {
            message.current.value[
              name
            ] = `${name}는 3글자 - 10글자여야 하며, 특수문자 ❌`
            setValid(true)
          } else {
            message.current.value[name] = ''
            setValid(false)
          }
          break
      }
    },
    [inputValue],
  )

  return [inputValue, validator, message, valid] as const
}
