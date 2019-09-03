import React from 'react';
import LineLoading from 'components/general/LineLoading';
import { randomVal } from 'utils';

/**
 * ListLoading
 * list loading placeholder component
 * @author willi <https://github.com/willi-dev>
 */
const ListLoading = props => {

  const loopListLoading = () => {
    let list = []
    for (let i = 0; i < props.counter; i++ ) {
      list.push(
        <li key={i}>
          <LineLoading width={randomVal(60,100)} />
          <LineLoading width={randomVal(60,100)} />
          <LineLoading width={randomVal(60,100)} />  
        </li>
      );
    }
    return list
  };

  return (
    <ol style={{ fontSize: `10px `}}>
      {loopListLoading()}
    </ol>
  )
}

export default ListLoading;
