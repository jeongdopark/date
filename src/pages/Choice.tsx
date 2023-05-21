import { S } from './style'
import Carousel from '../components/Choice/Carousel'
import Button from '../components/Choice/Button'
import useGetUserList from '../hook/useGetUserList'

const Choice = () => {
  const {
    userList,
    handleDislike,
    handleLike,
    currentUser,
    setCurrentUser,
    currentIndex,
    setCurrentIndex,
    loading,
  } = useGetUserList()

  // 유저 불러오기 로딩
  if (loading && userList.length === 0) {
    return (
      <S.Container>
        <div>Loading</div>
      </S.Container>
    )
  }

  // 유저리스트가 비어있을 경우
  if (userList.length === 0) {
    return (
      <S.Container>
        <div>더이상 유저가 없습니다</div>
      </S.Container>
    )
  }

  return (
    <S.Container>
      <Carousel
        setCurrentIndex={setCurrentIndex}
        setCurrentUser={setCurrentUser}
        currentIndex={currentIndex}
        userList={userList}
      />
      <Button
        handleDislike={handleDislike}
        handleLike={handleLike}
        currentUser={currentUser}
      />
    </S.Container>
  )
}

export default Choice
