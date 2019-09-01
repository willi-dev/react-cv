import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateTraining from 'store/cv/training/mapStateAction';
import dispatchStateTraining from 'store/cv/training/dispatchStateAction';
import Loading from 'components/general/Loading';
import Title from 'components/general/Title';
import Subtitle from 'components/general/Subtitle';
import Text from 'components/general/Text';

/**
 * Training
 * training component
 * @author willi <https://github.com/willi-dev>
 */
const Training = ({ training, fetched, fetchTraining }) => {
  const dataReverse = training.reverse()
  /**
   * useEffect
   */
  useEffect(() => {
    fetchTraining()
  }, [])

  return (
    <div className="container-component-outer">
      <Title>Training</Title>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && training.length > 0 ? 'element-show': 'element-hide'} >
        <ol>
        {
          dataReverse.map((item, index)=>(
            <li key={index}>
              <div className="container-component-inner">
                <Subtitle>{item.name} ({item.year})</Subtitle>
                <Text>{item.place}</Text>
              </div>
            </li>
          ))
        }
        </ol>
      </div>
    </div>
  )
}

export default connect(mapStateTraining, dispatchStateTraining)(Training);
