import React, { Component } from 'react';

export default class GitHubUsers extends Component {
	constructor() {
		super();
		this.state = { users: [] };
		console.log('Constructor');
	}

	async componentDidMount() {
		console.log('Component Did mount!');

		try {
			const res = await fetch('https://api.github.com/users');
			const users = await res.json();
			this.setState({ users: users });
			console.log(this.state.users[0].login);
		} catch (error) {
			console.log(error);
		}
	}

	render() {
		console.log('render');
		const { users } = this.state;
		return (
			<div>
				{users.length > 0 ? (
					<div>
						{users.map((user) => (
							<div>
								<p>{user.login}</p>
								<img src={user.avatar_url} width={50} height={50} />
							</div>
						))}
					</div>
				) : (
					'No user available'
				)}
			</div>
		);
	}
}
