import { S } from './style'
import { useState, useEffect } from 'react'
import Carousel from '../components/Choice/Carousel'
import Button from '../components/Choice/Button'
import { UserInfo } from '../@types/api'
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
  } = useGetUserList()

  if (userList.length === 0) {
    return (
      <S.Container>
        <div>Loading</div>
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
