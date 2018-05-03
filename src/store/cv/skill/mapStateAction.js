
const mapStateToProps = store => {
  return {
    skill: store.skill.skill,
    fetching: store.skill.fetching,
    fetched: store.skill.fetched
  }
}

export default mapStateToProps;