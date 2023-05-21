import { S } from '../style'
import { ReactComponent as HeartIcon } from '../../assets/heart_icon.svg'
import { ReactComponent as SwipperIcon } from '../../assets/swipper_icon.svg'
import { ReactComponent as UserIcon } from '../../assets/user_icon.svg'
import { useNavigate } from 'react-router'
import { PATH_NAME } from '../../util/constants'

const Footer = () => {
  const navigator = useNavigate()

  return (
    <S.FooterContainer>
      <div onClick={() => navigator(PATH_NAME.LIKELIST)}>
        <HeartIcon />
      </div>
      <div onClick={() => navigator(PATH_NAME.CHOICE)}>
        <SwipperIcon />
      </div>
      <div onClick={() => navigator(PATH_NAME.MYPAGE)}>
        <UserIcon />
      </div>
    </S.FooterContainer>
  )
}

export default Footer
