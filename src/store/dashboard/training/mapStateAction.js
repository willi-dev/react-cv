
const mapStateToProps = store => {
  return {
    training: store.training.training,
    fetched: store.training.fetched,
    fetching: store.training.fetching,
  }
}

export default mapStateToProps;