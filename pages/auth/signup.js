const signup = () => {
	return (
		<form>
			<h1>Sign Up</h1>
			<div className="form-group">
				<label htmlFor="email">Email Address</label>
				<input type="text" name="email" className="form-control" />
			</div>
			<div className="form-group">
				<label htmlFor="password">Passoword</label>
				<input type="password" name="password" className="form-control" />
			</div>
			<button className="btn btn-primary">Sign Up</button>
		</form>
	);
};

export default signup;
