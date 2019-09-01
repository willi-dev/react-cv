import React from 'react';

/**
 * Capsule
 * capsule component
 * @author willi <https://github.com/willi-dev>
 */
const Capsule = props => (
  <span style={style}>
    <span style={{ margin: `0 auto` }} className="font-ssp">{props.children}</span>
  </span>
)

const style = {
  color: `#666`,
  fontSize: `14px`,
  border: `1px solid #666`,
  borderRadius: `1px`,
  textAlign: `center`,
  display: `inline-block`,
  minWidth: `45px`,
  padding: `4px`,
  margin: `1px`
}

export default Capsule;
