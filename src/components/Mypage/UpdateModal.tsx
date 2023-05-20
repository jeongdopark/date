import { useState, useRef } from 'react'
import { updateUserInfo } from '../../api/user'
import { useInput } from '../../hook/useInput'
import { S } from '../style'

const UpdateModal = ({
  userNickname,
  modalRef,
  setModalShow,
  setTrigger,
}: {
  userNickname: string
  modalRef: any
  setModalShow: React.Dispatch<React.SetStateAction<boolean>>
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { inputValue, onChange } = useInput(userNickname)
  const [imgFile, setImgFile] = useState<string>('')

  const updateUserImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files![0])
  }

  const handleUpdateUserInfo = async () => {
    try {
      await updateUserInfo({
        nickname: inputValue.nickname,
        profileImgUrl: inputValue.url,
      })
    } catch (error) {
      console.log(error)
    } finally {
      setModalShow(false)
      setTrigger((prev) => !prev)
    }
  }

  return (
    <S.ModalContainer>
      <S.ModalInnerContainer ref={modalRef}>
        <S.Title>닉네임 변경</S.Title>
        <S.Input
          name={'nickname'}
          onChange={onChange}
          value={inputValue.nickname}
          placeholder="닉네임 변경하기"
        />
        <S.Title>프로필 이미지 변경</S.Title>
        <S.Input
          name={'url'}
          value={inputValue.url}
          style={{ marginBottom: '30px' }}
          onChange={onChange}
        />
        <S.Button onClick={handleUpdateUserInfo}>내 정보 변경하기</S.Button>
      </S.ModalInnerContainer>
    </S.ModalContainer>
  )
}

export default UpdateModal
