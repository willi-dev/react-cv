
const mapStateToProps = store => {
  return {
    personal: store.personal.personaldetail,
    fetched: store.personal.fetched,
    fetching: store.personal.fetching
  }
}

export default mapStateToProps;