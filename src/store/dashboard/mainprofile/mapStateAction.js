
const mapStateToProps = store => {
  return {
    main: store.main.mainprofile,
    fetched: store.main.fetched,
    fetching: store.main.fetching
  }
}

export default mapStateToProps;
