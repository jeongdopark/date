import { useState } from 'react'
import SendList from '../components/LikeList/SendList'
import { LIST_TYPE_RECEIVE, LIST_TYPE_SEND } from '../util/constants'

const useTab = () => {
  // tabIndex : 0 -> SendList 탭
  // tabIndex : 1 -> Receive 탭
  const TYPE_SEND_INDEX = 0
  const [tabIndex, setTabIndex] = useState<number>(TYPE_SEND_INDEX)
  const tab_obj = [
    { name: LIST_TYPE_SEND, content: <SendList listType={LIST_TYPE_SEND} /> },
    {
      name: LIST_TYPE_RECEIVE,
      content: <SendList listType={LIST_TYPE_RECEIVE} />,
    },
  ]

  const onChangeTabIndex = (idx: number) => {
    setTabIndex(idx)
  }

  return { tabIndex, onChangeTabIndex, tab_obj }
}

export default useTab
