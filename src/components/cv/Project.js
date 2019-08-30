import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateProject from '../../store/cv/project/mapStateAction';
import dispatchStateProject from '../../store/cv/project/dispatchStateAction';
import Loading from '../general/Loading';

const Project = ({ project, fetched, fetchProject }) => {
  let dataReverse = project.reverse()
  
  /**
   * useEffect
   */
  useEffect(() => {
    fetchProject()
  }, [])

  return (
    <div className="container-component-outer">
      <h6>Project</h6>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && project.length > 0 ? 'element-show': 'element-hide'} >
        <ol>
        {
          dataReverse.map((item, index) => (
            <li key={index}>
            <div className="container-component-inner">
              <p className="black-text bold-text">{item.name} {item.period} ({item.company}) </p>
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

export default connect(mapStateProject, dispatchStateProject)(Project);
