import useTab from '../hook/useTab'
import { useLocation } from 'react-router'
import { S } from './style'
import { useEffect } from 'react'
import Tab from '../components/LikeList/Tab'

const LikeList = () => {
  const { tabIndex, onChangeTabIndex, tab_obj } = useTab()
  const { state: isLocation } = useLocation()

  useEffect(() => {
    // Mypage에서 해당 페이지로 이동한 경우, isLocation !== null이다.
    // Mypage에서
    // '내가 좋아하는 사람' 클릭 시 -> isLocation.tabIdx : 0 (SEND_TYPE_IDX)
    // '내가 좋아하는 사람' 클릭 시 -> isLocation.tabIdx : 1 (RECEIVE_TYPE_IDX)
    if (isLocation !== null) onChangeTabIndex(isLocation.tabIdx)
  }, [])

  return (
    <S.Container>
      <Tab
        tabIndex={tabIndex}
        onChangeTabIndex={onChangeTabIndex}
        tab_obj={tab_obj}
      />
      <S.ContentWrapper>{tab_obj[tabIndex].content}</S.ContentWrapper>
    </S.Container>
  )
}

export default LikeList
