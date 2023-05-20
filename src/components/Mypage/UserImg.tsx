import React, { useEffect } from 'react'
import { S } from '../style'
import UpdateModal from './UpdateModal'
import { useModalShow } from '../../hook/useModalShow'
import { useUserInfo } from '../../hook/useUserInfo'

const UserImg = () => {
  const { modalRef, modalShow, onClickModalShow, setModalShow } = useModalShow()
  const { getUserInfos, userNickname, userImg, setTrigger, trigger } =
    useUserInfo()

  useEffect(() => {
    getUserInfos()
  }, [trigger])

  return (
    <React.Fragment>
      <S.ImgContainer>
        <S.Img src={userImg} />
        <div style={{ marginBottom: '30px' }}>{userNickname}</div>
      </S.ImgContainer>
      <S.EditContainer>
        <button onClick={onClickModalShow}>edit</button>
      </S.EditContainer>
      {modalShow && (
        <UpdateModal
          userNickname={userNickname}
          modalRef={modalRef}
          setModalShow={setModalShow}
          setTrigger={setTrigger}
        />
      )}
    </React.Fragment>
  )
}

export default UserImg
