import { useState } from 'react'

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    console.log(e.target.value)
  }

  return [value, onChange] as const
}
