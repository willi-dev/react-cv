import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateEdu from '../../store/cv/education/mapStateAction';
import dispatchStateEdu from '../../store/cv/education/dispatchStateAction';
import Loading from '../general/Loading';
import './Cv.css';

const Education = ({ edu, fetched, fetchEducation }) => {
  let dataReverse = edu.reverse()

  /**
   * useEffect
   */
  useEffect(() => {
    fetchEducation()
  }, [])

  return (
    <div className="container-component-outer">
      <h6>Education</h6>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && edu.length > 0 ? 'element-show': 'element-hide'} >
        <ol>
        {
          dataReverse.map((item, index)=>(
            <li key={index}>
              <div className="container-component-inner">
                <p className="black-text bold-text">{item.school} ({item.period})</p>
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

export default connect(mapStateEdu, dispatchStateEdu)(Education);
