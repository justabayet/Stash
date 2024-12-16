import { NavLink } from 'react-router-dom'
import colors from '../colors'

interface NavigationButtonProps {
  text: string
  destination: string
  color?: string
}

function NavigationButton({ text, destination, color = colors.primary }: NavigationButtonProps): JSX.Element {
  return (
    <NavLink to={destination} style={{
      textDecoration: 'none'
    }}>
      <div style={{
        width: '100%',
        padding: '30px 0px 30px 30px',
        backgroundColor: color,
        color: colors.text,
        cursor: 'pointer',
        fontFamily: 'monospace',
        fontSize: '30px',
        marginBottom: '60px'
      }}>
        {text.toUpperCase()}
      </div>
    </NavLink>
  )
}

export default NavigationButton
