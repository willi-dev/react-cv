
const mapStateToProps = store => {
  return {
    work: store.work.work,
    fetching: store.work.fetching,
    fetched: store.work.fetched
  }
}

export default mapStateToProps;