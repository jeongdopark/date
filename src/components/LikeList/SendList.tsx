import { S } from './style'
import useUpdateAffinityList from '../../hook/useUpdateAffinityList'
import {
  LIST_TYPE_RECEIVE,
  LIST_TYPE_SEND,
  NICKNAME,
  PROFILE_IMG_URL,
} from '../../util/constants'
type List = 'send' | 'receive'

const SendList = ({ listType }: { listType: List }) => {
  const { onClickCancel, affinityList } = useUpdateAffinityList()

  return (
    <S.Container>
      {affinityList[listType].map((e, idx) => (
        <S.Element key={idx}>
          <S.UserInfo>
            <S.Img src={e[PROFILE_IMG_URL]} />
            <S.Nickname>{e[NICKNAME]}</S.Nickname>
          </S.UserInfo>
          {listType === LIST_TYPE_SEND && (
            <S.Button onClick={() => onClickCancel(e.userId)}>취소</S.Button>
          )}
        </S.Element>
      ))}
    </S.Container>
  )
}

export default SendList
