
const mapStateToProps = store => {
  return {
    related: store.related.related,
    fetching: store.related.fetching,
    fetched: store.related.fetched
  }
}

export default mapStateToProps;