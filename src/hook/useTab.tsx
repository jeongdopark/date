import { useState } from 'react'
import SendList from '../components/LikeList/SendList'

const useTab = () => {
  const [tabIndex, setTabIndex] = useState<number>(0)
  const tab_obj = [
    { name: 'Send', content: <SendList listType={'send'} /> },
    { name: 'Receive', content: <SendList listType={'receive'} /> },
  ]

  const onChangeTabIndex = (idx: number) => {
    setTabIndex(idx)
  }

  return { tabIndex, onChangeTabIndex, tab_obj }
}

export default useTab
