import { S } from '../style'
import { ReactComponent as HeartIcon } from '../../assets/heart_icon.svg'
import { ReactComponent as SwipperIcon } from '../../assets/swipper_icon.svg'
import { ReactComponent as UserIcon } from '../../assets/user_icon.svg'
import { useNavigate } from 'react-router'

const Footer = () => {
  const navigator = useNavigate()

  return (
    <S.FooterContainer>
      <div onClick={() => navigator('likelist')}>
        <HeartIcon />
      </div>
      <div onClick={() => navigator('choice')}>
        <SwipperIcon />
      </div>
      <div onClick={() => navigator('mypage')}>
        <UserIcon />
      </div>
    </S.FooterContainer>
  )
}

export default Footer
