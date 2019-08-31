import React from 'react';

/**
 * Text
 * text component
 * @author willi <https://github.com/willi-dev>
 */
const Text = props => <p style={style} className="font-ssp">{ props.children }</p>

const style = {
  color: `#666`,
  marginTop: `2px`,
  fontSize: `14px`
}

export default Text;