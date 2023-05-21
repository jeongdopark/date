import { S } from './style'

interface TabProps {
  tabIndex: number
  onChangeTabIndex: (idx: number) => void
  tab_obj: TabObj[]
}

interface TabObj {
  name: string
  content: React.ReactElement
}

const Tab = ({ tabIndex, onChangeTabIndex, tab_obj }: TabProps) => {
  return (
    <S.TabContainer>
      {tab_obj.map((_, idx) => (
        <S.TabElement
          isSelected={idx === tabIndex}
          key={idx}
          onClick={() => onChangeTabIndex(idx)}
        >
          {tab_obj[idx].name}
        </S.TabElement>
      ))}
    </S.TabContainer>
  )
}

export default Tab
