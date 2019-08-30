import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateWork from '../../store/cv/work/mapStateAction';
import dispatchStateWork from '../../store/cv/work/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title';

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
      <Title text="Work Experience"/>
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
                <p className="black-text bold-text">{item.position} {item.period}</p>
                <p>{item.company}</p>
                <p>{item.description}</p>
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
