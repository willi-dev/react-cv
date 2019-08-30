import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateRelated from '../../store/cv/related/mapStateAction';
import dispatchStateRelated from '../../store/cv/related/dispatchStateAction';
import Loading from '../general/Loading';

const Related = ({ related, fetched, fetchRelated }) => {
  /**
   * useEffect
   */
  useEffect(() => {
    fetchRelated()
  }, [])

  return (
    <div className="container-component-outer">
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && related.length > 0 ? 'element-show': 'element-hide'} >
        {
          related.map((item, index) => (
            <span key={index}>{item.relatedtools} &nbsp;</span>
          ))
        }
      </div>
    </div>
  )
}

export default connect( mapStateRelated, dispatchStateRelated )(Related);
