import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateEdu from 'store/cv/education/mapStateAction';
import dispatchStateEdu from 'store/cv/education/dispatchStateAction';
import Loading from 'components/general/Loading';
import Title from 'components/general/Title';
import Subtitle from 'components/general/Subtitle'
import Text from 'components/general/Text';

/**
 * Education
 * education component
 * @author willi <https://github.com/willi-dev>
 */
const Education = ({ edu, fetched, fetchEducation }) => {
  const dataReverse = edu.reverse()
  /**
   * useEffect
   */
  useEffect(() => {
    fetchEducation()
  }, [])

  return (
    <div className="container-component-outer">
      <Title>Education</Title>
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
                <Subtitle>{item.school} ({item.period})</Subtitle>
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

export default connect(mapStateEdu, dispatchStateEdu)(Education);
