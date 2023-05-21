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
      <S.Button color={'like'} onClick={() => handleLike(currentUser.userId)}>
        LIKE 👍
      </S.Button>
      <S.Button
        color={'dislike'}
        onClick={() => handleDislike(currentUser.userId)}
      >
        DISLIKE 👎
      </S.Button>
    </S.ButtonContainer>
  )
}

export default Button
