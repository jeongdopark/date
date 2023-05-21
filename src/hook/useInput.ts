import { useState } from 'react'

interface IInputValue {
  nickname: string
  profileImgUrl: string
}

export const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<IInputValue>({
    nickname: initialValue,
    profileImgUrl: '',
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInputValue({ ...inputValue, [name]: value })
  }

  return { inputValue, onChange }
}
