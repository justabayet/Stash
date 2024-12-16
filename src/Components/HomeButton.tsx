

import { NavLink } from 'react-router-dom'
import colors from '../colors'

function HomeButton(): JSX.Element {
  return (
    <NavLink to={'/'} style={{
      textDecoration: 'none'
    }}>
      <div style={{
        width: '100%',
        padding: '30px 0px 30px 30px',
        backgroundColor: colors.primary,
        color: colors.text,
        cursor: 'pointer',
        fontFamily: 'monospace',
        fontSize: '30px',
        marginBottom: '60px'
      }}>
        HOME
      </div>
    </NavLink>
  )
}

export default HomeButton
