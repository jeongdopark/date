import React from 'react'
import { S } from '../style'
import UpdateModal from './UpdateModal'
import { useModalShow } from '../../hook/useModalShow'

const UserImg = ({
  userImg,
  userNickname,
}: {
  userImg: string
  userNickname: string
}) => {
  const { modalRef, modalShow, onClickModalShow } = useModalShow()

  return (
    <React.Fragment>
      <S.ImgContainer>
        <S.Img src={userImg} />
      </S.ImgContainer>
      <S.EditContainer>
        <div style={{ marginBottom: '30px' }}>{userNickname}</div>
        <button onClick={onClickModalShow}>edit</button>
      </S.EditContainer>
      {modalShow && (
        <UpdateModal userNickname={userNickname} modalRef={modalRef} />
      )}
    </React.Fragment>
  )
}

export default UserImg
