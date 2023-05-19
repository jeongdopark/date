import { S } from './style'
import useUpdateAffinityList from '../../hook/useGetAffinityList'

type List = 'send' | 'receieve'

const SendList = ({ listType }: { listType: List }) => {
  const { onClickCancel, affinityList } = useUpdateAffinityList()

  return (
    <S.Container>
      {affinityList[listType].map((e, idx) => (
        <S.Element key={idx}>
          <S.UserInfo style={{ display: 'flex', flexDirection: 'row' }}>
            <img
              src={e['profileImgUrl']}
              style={{ width: '20px', height: '20px' }}
            />
            <div>{e['nickname']}</div>
          </S.UserInfo>
          {listType === 'send' && (
            <button onClick={() => onClickCancel(e.userId)}>취소</button>
          )}
        </S.Element>
      ))}
    </S.Container>
  )
}

export default SendList
