import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateMain from '../../store/cv/mainprofile/mapStateAction';
import dispatchStateMain from '../../store/cv/mainprofile/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title'
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
      <h4>Willi</h4>
      <Title text="Frontend Engineer"/>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && main.length > 0 ? 'element-show': 'element-hide'} >
        {
          main.map((item, index)=>(
            <div key={index} className="container-component-inner">
              <p >Job title: {item.jobTitle}</p>
              <p>Phone: {item.phone}</p>
              <p>Address: {item.address}</p>
              <p>Linkedin: <a href={item.linkedin} target="_blank">{item.linkedin}</a></p>
              <p>Github: <a href={item.github} target="_blank">{item.github}</a></p>
              <p>Blog: <a href={item.blog} target="_blank">{item.blog}</a></p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default connect(mapStateMain, dispatchStateMain)(MainProfile);
