import { useState, useRef } from 'react'
import { updateUserInfo } from '../../api/user'
import { useInput } from '../../hook/useInput'
import { S } from '../style'

const UpdateModal = ({
  userNickname,
  modalRef,
}: {
  userNickname: string
  modalRef: any
}) => {
  const [nicknameValue, onChange] = useInput(userNickname)
  const [imgFile, setImgFile] = useState<string>('')

  const updateUserImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files![0])
  }

  const handleUpdateUserInfo = async () => {
    const res = await updateUserInfo({
      nickname: nicknameValue,
      profileImgUrl: imgFile,
    })
    if (res?.isSuccess) {
    }
  }

  return (
    <S.ModalContainer>
      <S.ModalInnerContainer ref={modalRef}>
        <S.Title>닉네임 변경</S.Title>
        <S.Input
          onChange={onChange}
          value={nicknameValue}
          placeholder="닉네임 변경하기"
        />
        <S.Title>프로필 이미지 변경</S.Title>
        <input
          style={{ marginBottom: '30px' }}
          type="file"
          onChange={updateUserImg}
        />
        <S.Button onClick={handleUpdateUserInfo}>내 정보 변경하기</S.Button>
      </S.ModalInnerContainer>
    </S.ModalContainer>
  )
}

export default UpdateModal
