import { useState, useEffect } from 'react'
import { S } from './style'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './custom.css'
import useGetUserList from '../../hook/useGetUserList'
import { UserInfo } from '../../@types/api'

interface IProps {
  setCurrentUser: React.Dispatch<React.SetStateAction<UserInfo>>
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>
  currentIndex: number
  userList: UserInfo[]
}

const Carousel = ({
  setCurrentUser,
  setCurrentIndex,
  currentIndex,
  userList,
}: IProps) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    onInit: () => {
      setCurrentIndex(currentIndex)
    },
    afterChange: (index: number) => {
      setCurrentIndex(index)
    },
  }

  return (
    <S.Container>
      <Slider {...settings}>
        {userList.map((e, idx) => (
          <S.ListElement key={idx}>
            <img src={e.profileImgUrl} />
            <div>{e.nickname}</div>
          </S.ListElement>
        ))}
      </Slider>
    </S.Container>
  )
}

export default Carousel
