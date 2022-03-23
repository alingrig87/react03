import React, { useEffect, useState } from 'react';

const UseEffectExample = () => {
	const [query, setQuery] = useState('');
	const [random, setRandom] = useState(0);

	useEffect(() => {
		console.log('Hello');
	}, []);

	return (
		<div>
			<input type="text" onChange={(event) => setQuery(event.target.value)} />
			<p>{query}</p>
			<button onClick={() => setRandom(Math.random())}>Random</button>
		</div>
	);
};

export default UseEffectExample;
