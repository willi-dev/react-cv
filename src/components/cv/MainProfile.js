import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateMain from '../../store/cv/mainprofile/mapStateAction';
import dispatchStateMain from '../../store/cv/mainprofile/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title'
import Text from '../general/Text';
import './Cv.css';

/**
 * MainProfile
 * main profile component
 * @author willi <https://github.com/willi-dev>
 */
const MainProfile = ({ main, fetched, fetchMainProfile }) => {
  /**
   * useEffect
   */
  useEffect(() => {
    fetchMainProfile()
  }, [])

  return (
    <div className="container-component-outer">
      <h4 className="font-pf font-700 black-text">Willi</h4>
      <Title>Frontend Engineer</Title>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && main.length > 0 ? 'element-show': 'element-hide'} >
        {
          main.map((item, index)=>(
            <div key={index} className="container-component-inner">
              <Text>Job title: {item.jobTitle}</Text>
              <Text>Phone: {item.phone}</Text>
              <Text>Address: {item.address}</Text>
              <Text>Linkedin: <a href={item.linkedin} target="_blank">{item.linkedin}</a></Text>
              <Text>Github: <a href={item.github} target="_blank">{item.github}</a></Text>
              <Text>Blog: <a href={item.blog} target="_blank">{item.blog}</a></Text>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);
