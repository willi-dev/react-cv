import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStatePublication from '../../store/cv/publication/mapStateAction';
import dispatchStatePublication from '../../store/cv/publication/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title';

/**
 * Publication
 * publication component
 * @author willi <https://github.com/willi-dev>
 */
const Publication = ({ publication, fetched, fetchPublication }) => {
  /**
   * useEffect
   */
  useEffect(() => {
    fetchPublication()
  }, [])

  return (
    <div className="container-component-outer last">
      <Title text="Publication"/>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && publication.length > 0 ? 'element-show': 'element-hide'} >
        {
          publication.map((item, index) => (
            <div key={index} className="container-component-inner">
              <p>{item.publication}</p>
              <p>{item.description}</p>
              <p>{item.link}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default connect(mapStatePublication, dispatchStatePublication)(Publication);
