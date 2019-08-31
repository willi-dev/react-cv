import React from 'react'

/**
 * Subtitle
 * subtitle component
 * @author willi <https://github.com/willi-dev>
 */
const Subtitle = props => <p style={style} className="font-ssp">{ props.children }</p>

const style = {
  color: `black`,
  fontWeight: `700`,
  fontSize: `14px`
}
export default Subtitle
