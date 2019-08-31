import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStatePersonal from '../../store/cv/personaldetail/mapStateAction';
import dispatchStatePersonal from '../../store/cv/personaldetail/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title';
import Text from '../general/Text';
import './Cv.css';

/**
 * PersonalDetail
 * personal detail
 * @author willi <https://github.com/willi-dev>
 */
const PersonalDetail = ({ fetched, personal, fetchPersonal }) => {
  /**
   * useEffect
   */
  useEffect(() => {
    fetchPersonal()
  }, [])

  return (
    <div className="container-component-outer">
      <Title>Personal Detail</Title>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && personal.length > 0 ? 'element-show': 'element-hide'} >
        {
          personal.map((item, index)=>(
            <div key={index} className="container-component-inner">
              <Text>Place, Date of Birth: {item.placeBirth}, {item.dateOfBirth}</Text>
              <Text>Gender: {item.gender}</Text>
              <Text>Language: {item.language}</Text>
              <Text>Religion: {item.religion}</Text>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default connect(mapStatePersonal, dispatchStatePersonal)(PersonalDetail);
