import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateProject from '../../store/cv/project/mapStateAction';
import dispatchStateProject from '../../store/cv/project/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title';
import Subtitle from '../general/Subtitle';
import Text from '../general/Text';

/**
 * Project
 * project component
 * @author willi <https://github.com/willi-dev>
 */
const Project = ({ project, fetched, fetchProject }) => {
  const dataReverse = project.reverse()
  
  /**
   * useEffect
   */
  useEffect(() => {
    fetchProject()
  }, [])

  return (
    <div className="container-component-outer">
      <Title>Project</Title>
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
                <Subtitle>{item.name} {item.period} ({item.company})</Subtitle>
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

export default connect(mapStateProject, dispatchStateProject)(Project);
