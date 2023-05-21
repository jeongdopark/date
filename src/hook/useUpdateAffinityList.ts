import { useState, useEffect } from 'react'
import { getAffinityList, patchDisLike } from '../api/affinity'

interface Affinity {
  send: AffinityElement[]
  receive: AffinityElement[]
}

interface AffinityElement {
  nickname: string
  profileImgUrl: string
  userId: string
}

const useUpdateAffinityList = () => {
  const [affinityList, setAffinityList] = useState<Affinity>({
    send: [],
    receive: [],
  })
  const [getListTrigger, setGetListTrigger] = useState<boolean>(true)

  useEffect(() => {
    getAffinityList().then((res) => {
      setAffinityList((prevState) => {
        return {
          send: [...res.data.send],
          receive: [...res.data.receieve],
        }
      })
    })
  }, [getListTrigger])

  const onClickCancel = async (targetUser: string) => {
    try {
      await patchDisLike(targetUser)
    } finally {
      setGetListTrigger((prev) => !prev)
    }
  }

  return { affinityList, onClickCancel }
}

export default useUpdateAffinityList
