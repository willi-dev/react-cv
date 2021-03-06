import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import mapStateSkill from 'store/cv/skill/mapStateAction';
import dispatchStateSkill from 'store/cv/skill/dispatchStateAction';
import ListCapsuleLoading from 'components/general/ListCapsuleLoading';
import Title from 'components/general/Title';
import Capsule from 'components/general/Capsule';

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
      <Title>Skills</Title>
      {
        (!fetched) && (
          <ListCapsuleLoading counter="12" />
          )
      }
      <div className={fetched && skill.length > 0 ? 'element-show': 'element-hide'} >
        {
          skill.map((item, index) => (
            <Capsule key={index}>{ item.skill }</Capsule>
          ))
        }
      </div>
    </div>
  )
}

export default connect( mapStateSkill, dispatchStateSkill )(Skill);
