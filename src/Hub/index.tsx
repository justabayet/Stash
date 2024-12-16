import colors from '../colors'
import NavigationButton from './NavigationButton'


function Hub(): JSX.Element {
  return (
    <>
      <NavigationButton text='mirrors' destination='mirrors' />
      <NavigationButton text='wip' destination='wip' color={colors.secondary} />
    </>
  )
}

export default Hub
