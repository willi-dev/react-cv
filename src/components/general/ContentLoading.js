import React from 'react';
import LineLoading from 'components/general/LineLoading';
import { randomVal } from 'utils';

/**
 * ContentLoading
 * content loading placeholder
 * @author willi <https://github.com/willi-dev>
 */
const ContentLoading = props => (
  <span>
    <LineLoading width={randomVal(60,100)} />
    <LineLoading width={randomVal(60,100)} />
    <LineLoading width={randomVal(60,100)} />
    <LineLoading width={randomVal(60,100)} />
  </span>
)

export default ContentLoading;
