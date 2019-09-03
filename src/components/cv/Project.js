import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateProject from 'store/cv/project/mapStateAction';
import dispatchStateProject from 'store/cv/project/dispatchStateAction';
import ListLoading from 'components/general/ListLoading';
import Title from 'components/general/Title';
import Subtitle from 'components/general/Subtitle';
import Text from 'components/general/Text';
import Listorder from 'components/general/Listorder';

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
          <ListLoading counter="18" />
          )
      }
      <div className={fetched && project.length > 0 ? 'element-show': 'element-hide'} >
        <ol>
        {
          dataReverse.map((item, index) => (
            <Listorder key={index}>
              <Subtitle>{item.name} {item.period} ({item.company})</Subtitle>
              <Text>{item.description}</Text>
            </Listorder>
          ))
        }
        </ol>
      </div>
    </div>
  )
}

export default connect(mapStateProject, dispatchStateProject)(Project);
