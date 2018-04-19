
const mapStateToProps = store => {
  return {
    edu: store.edu.education,
    fetched: store.edu.fetched,
    fetching: store.edu.fetching
  }
}

export default mapStateToProps;