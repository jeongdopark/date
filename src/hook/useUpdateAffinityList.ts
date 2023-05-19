import { useState, useEffect } from 'react'
import { getAffinityList, patchDisLike } from '../api/affinity'

interface Affinity {
  send: AffinityElement[]
  receieve: AffinityElement[]
}

interface AffinityElement {
  nickname: string
  profileImgUrl: string
  userId: string
}

const useUpdateAffinityList = () => {
  const [affinityList, setAffinityList] = useState<Affinity>({
    send: [],
    receieve: [],
  })
  const [getListTrigger, setGetListTrigger] = useState<boolean>(true)
  console.log(getListTrigger)

  useEffect(() => {
    console.log('get')

    getAffinityList().then((res) => {
      setAffinityList((prevState) => {
        return {
          send: [...res.data.send],
          receieve: [...res.data.receieve],
        }
      })
    })
  }, [getListTrigger])

  const onClickCancel = async (targetUser: string) => {
    console.log(targetUser)

    try {
      await patchDisLike(targetUser)
    } finally {
      setGetListTrigger((prev) => !prev)
    }
  }

  return { affinityList, onClickCancel }
}

export default useUpdateAffinityList