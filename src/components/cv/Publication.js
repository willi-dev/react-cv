import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStatePublication from 'store/cv/publication/mapStateAction';
import dispatchStatePublication from 'store/cv/publication/dispatchStateAction';
import ContentLoading from 'components/general/ContentLoading';
import Title from 'components/general/Title';
import Text from 'components/general/Text';

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
      <Title>Publication</Title>
      {
        (!fetched) && (
          <ContentLoading />
          )
      }
      <div className={fetched && publication.length > 0 ? 'element-show': 'element-hide'} >
        {
          publication.map((item, index) => (
            <div key={index} className="container-component-inner">
              <Text>{item.publication}</Text>
              <Text>{item.description}</Text>
              <Text>{item.link}</Text>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default connect(mapStatePublication, dispatchStatePublication)(Publication);
