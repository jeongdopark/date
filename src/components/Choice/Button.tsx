import { S } from './style'
import { UserInfo } from '../../@types/api'

interface IProps {
  handleLike: (userId: string) => void
  handleDislike: (userId: string) => void
  currentUser: UserInfo
}

const Button = ({ handleLike, handleDislike, currentUser }: IProps) => {
  return (
    <S.ButtonContainer>
      <button onClick={() => handleLike(currentUser.userId)}>LIKE 👍</button>
      <button onClick={() => handleDislike(currentUser.userId)}>
        DISLIKE 👎
      </button>
    </S.ButtonContainer>
  )
}

export default Button
