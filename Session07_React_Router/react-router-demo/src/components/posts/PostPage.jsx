import React from 'react';
import { useParams } from 'react-router-dom';

const PostPage = () => {
	const params = useParams();
	console.log(params);
	return <div>PostPage {params.postId}</div>;
};

export default PostPage;
