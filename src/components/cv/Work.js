import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateWork from 'store/cv/work/mapStateAction';
import dispatchStateWork from 'store/cv/work/dispatchStateAction';
import ListLoading from 'components/general/ListLoading';
import Title from 'components/general/Title';
import Subtitle from 'components/general/Subtitle';
import Text from 'components/general/Text';
import Listorder from 'components/general/Listorder';

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
      <Title>Work Experience</Title>
      {
        (!fetched) && (
          <ListLoading counter="5"/>
          )
      }
      <div className={fetched && work.length > 0 ? 'element-show': 'element-hide'} >
        <ol>
        { 
          dataReverse.map((item, index) => (
            <Listorder key={index}>
              <Subtitle>{item.position} {item.period}</Subtitle>
              <Text>{item.company}</Text>
              <Text>{item.description}</Text>
            </Listorder>
          ))
        }
        </ol>
      </div>
    </div>
  )
}

export default connect(mapStateWork, dispatchStateWork)(Work);
