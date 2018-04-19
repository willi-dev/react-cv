
const mapStateToProps = store => {
  return {
    publication: store.publication.publication,
    fetched: store.publication.fetched,
    fetching: store.publication.fetching,
  }
}

export default mapStateToProps;