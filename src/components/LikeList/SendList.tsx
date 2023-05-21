import { S } from './style'
import useUpdateAffinityList from '../../hook/useUpdateAffinityList'

type List = 'send' | 'receive'

const SendList = ({ listType }: { listType: List }) => {
  const { onClickCancel, affinityList } = useUpdateAffinityList()

  return (
    <S.Container>
      {affinityList[listType].map((e, idx) => (
        <S.Element key={idx}>
          <S.UserInfo>
            <S.Img src={e['profileImgUrl']} />
            <S.Nickname>{e['nickname']}</S.Nickname>
          </S.UserInfo>
          {listType === 'send' && (
            <S.Button onClick={() => onClickCancel(e.userId)}>취소</S.Button>
          )}
        </S.Element>
      ))}
    </S.Container>
  )
}

export default SendList
