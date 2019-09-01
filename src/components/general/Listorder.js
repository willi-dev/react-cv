import React from 'react';

/**
 * Listorder 
 * list order component
 * @author willi <https://github.com/willi-dev>
 */

const Listorder = props => (
  <li>
    <div className="container-component-inner">
      { props.children }
    </div>
  </li>
)

export default Listorder;
