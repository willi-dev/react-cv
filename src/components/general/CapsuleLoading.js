import React from 'react';

/**
 * CapsuleLoading
 * capsule loading placeholder
 * @author willi <https://github.com/willi-dev>
 */
const CapsuleLoading = props => (
  <span style={style(props.width)}>
    <span style={{ margin: `0 auto` }} className="font-ssp">Loading...</span>
  </span>
)

const style = (randomWidth) => {
  return {
    color: `transparent`,
    fontSize: `14px`,
    border: `1px solid #f6f7f8`,
    borderRadius: `1px`,
    textAlign: `center`,
    display: `inline-block`,
    minWidth: `45px`,
    padding: `4px`,
    margin: `1px`,
    animationDuration: `1s`,
    animationFillMode: `forwards`,
    animationIterationCount: `infinite`,
    animationTimingFunction: `linear`,
    animationName: `placeholderAnimate`,
    // background: `#f6f7f8`, // Fallback
    background: `linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%)`,
    backgroundSize: `1300px`, // Animation Area
    transition: `all 0.2s ease`,
    width: randomWidth + `%`
  }
}

export default CapsuleLoading