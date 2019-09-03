import React from 'react';
import CapsuleLoading from 'components/general/CapsuleLoading';
import { randomVal } from 'utils';

/**
 * ListCapsuleLoading
 * list capsule loading placeholder compoennt
 * @author willi <https://github.com/willi-dev>
 */
const ListCapsuleLoading = props => {
  const loopLoading = () => {
    let list = []
    for (let i = 0; i < props.counter; i++ ) {
      list.push(
        <CapsuleLoading key={i} width={randomVal(10, 20)} />
      );
    }
    return list
  }

  return (
    <span>
      {loopLoading()}
    </span>
  )
}

export default ListCapsuleLoading;
