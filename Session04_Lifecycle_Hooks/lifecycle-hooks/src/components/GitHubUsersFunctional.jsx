import React, { useState, useEffect } from 'react';

const GitHubUsersFunctional = () => {
	const [users, setUsers] = useState([]);

	useEffect(async () => {
		try {
			const res = await fetch('https://api.github.com/users');
			const users = await res.json();
			setUsers(users);
			console.log(users[0].login);
		} catch (error) {
			console.log(error);
		}
	}, []);

	return <div>{users.length > 0 ? users[0].login : 'No user available'}</div>;
};

export default GitHubUsersFunctional;
