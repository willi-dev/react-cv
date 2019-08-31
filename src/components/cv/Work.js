import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateWork from '../../store/cv/work/mapStateAction';
import dispatchStateWork from '../../store/cv/work/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title';
import Subtitle from '../general/Subtitle';
import Text from '../general/Text';

/**
 * Work
 * work component
 * @author willi <https://github.com/willi-dev>
 */
const Work = ({ work, fetched, fetchWork }) => {
  const dataReverse = work.reverse()
  /**
   * useEffect
   */
  useEffect(() => {
    fetchWork()
  }, [])

  return (
    <div className="container-component-outer">
      <Title>
        Work Experience
      </Title>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && work.length > 0 ? 'element-show': 'element-hide'} >
        <ol>
        { 
          dataReverse.map((item, index) => (
            <li key={index} >
              <div className="container-component-inner">
                <Subtitle>{item.position} {item.period}</Subtitle>
                <Text>{item.company}</Text>
                <Text>{item.description}</Text>
              </div>
            </li>
          ))
        }
        </ol>
      </div>
    </div>
  )
}

export default connect(mapStateWork, dispatchStateWork)(Work);
