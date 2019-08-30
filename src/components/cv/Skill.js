import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateSkill from '../../store/cv/skill/mapStateAction';
import dispatchStateSkill from '../../store/cv/skill/dispatchStateAction';
import Loading from '../general/Loading';
import Title from '../general/Title';

/**
 * Skill
 * skill component
 * @author willi <https://github.com/willi-dev>
 */
const Skill = ({ skill, fetched, fetchSkill }) => {
  /**
   * useEffect
   */
  useEffect(() => {
    fetchSkill()
  }, [])

  return (
    <div className="container-component-outer">
      <Title text="Skill"/>
      {
        (!fetched) && (
          <Loading />
          )
      }
      <div className={fetched && skill.length > 0 ? 'element-show': 'element-hide'} >
        {
          skill.map((item, index) => (
            <span key={index}>{item.skill} &nbsp;</span>
          ))
        }
      </div>
    </div>
  )
}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);
