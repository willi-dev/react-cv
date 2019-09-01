import React from 'react';


const style = (randomWidth) => {
  return {
    marginTop: `7px`,
    fontSize: `12px`,
    marginBottom: `0`,
    color: `transparent`,
    animationDuration: `1s`,
    animationFillMode: `forwards`,
    animationIterationCount: `infinite`,
    animationTimingFunction: `linear`,
    animationName: `placeholderAnimate`,
    // background: `#f6f7f8`, // Fallback
    background: `linear-gradient(to right, #eee 2%, #ddd 18%, #eee 33%)`,
    backgroundSize: `1300px`, // Animation Area
    transition: `all 0.2s ease`,
    width: randomWidth + `%`,
  }
}

/**
 * LineLoading
 * line loading placeholder
 * @author willi <https://github.com/willi-dev>
 */
const LineLoading = props => (
  <p style={style(props.width)} className="font-ssp">Loading...</p>
)

export default LineLoading;
