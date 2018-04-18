
const mapStateToProps = store => {
  return {
    project: store.project.project,
    fetching: store.project.fetching,
    fetched: store.project.fetched
  }
}

export default mapStateToProps;