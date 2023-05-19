import useTab from '../hook/useTab'
import { useLocation } from 'react-router'
import { S } from './style'
import { useEffect } from 'react'

const LikeList = () => {
  const { tabIndex, onChangeTabIndex, tab_obj } = useTab()
  const { state: isLocation } = useLocation()

  // Mypage에서 '내가 좋아하는 사람' or '나를 좋아하는 사람'버튼을 클릭하고 진입할 시에 if문 동작
  // 분리할 수 있는지 고민.
  useEffect(() => {
    if (isLocation !== null) onChangeTabIndex(isLocation.tabIdx)
  }, [])

  return (
    <S.Container>
      <S.TabContainer>
        {tab_obj.map((_, idx) => (
          <S.TabElement
            isSelected={idx === tabIndex}
            key={idx}
            onClick={() => onChangeTabIndex(idx)}
          >
            {tab_obj[idx].name}
          </S.TabElement>
        ))}
      </S.TabContainer>
      <S.ContentWrapper>{tab_obj[tabIndex].content}</S.ContentWrapper>
    </S.Container>
  )
}

export default LikeList
