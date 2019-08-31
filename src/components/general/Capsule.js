import React from 'react';

/**
 * Capsule
 * capsule component
 * @author willi <https://github.com/willi-dev>
 */
const Capsule = props => <span style={style} className="font-ssp" key={props.index}>{props.children} &nbsp;</span>

const style = {
  color: `#666`,
  fontSize: `14px`
}

export default Capsule;
