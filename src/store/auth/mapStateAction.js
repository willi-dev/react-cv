const mapStateToProps = store => {
	return {
		auth: store.auth.user
	}
}

export default mapStateToProps;
