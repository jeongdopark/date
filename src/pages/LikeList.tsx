import useTab from '../hook/useTab'
import { S } from './style'

const LikeList = () => {
  const { tabIndex, onChangeTabIndex, tab_obj } = useTab()

  return (
    <S.Container>
      <S.TabContainer>
        {tab_obj.map((_, idx) => (
          <S.TabElement key={idx} onClick={() => onChangeTabIndex(idx)}>
            {tab_obj[idx].name}
          </S.TabElement>
        ))}
      </S.TabContainer>
      <S.ContentWrapper>{tab_obj[tabIndex].content}</S.ContentWrapper>
    </S.Container>
  )
}

export default LikeList
