const mapStateToProps = store => {
	return {
		authUser: store.auth.user
	}
}

export default mapStateToProps;
