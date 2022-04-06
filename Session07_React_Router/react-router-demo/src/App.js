import './App.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Posts from './components/posts/Posts';
import PostPage from './components/posts/PostPage';
import Navbar from './components/layout/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Navigate to="/register" />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/posts" element={<Posts />} />
				<Route path="/posts/:postId" element={<PostPage />} />
			</Routes>
		</div>
	);
}

export default App;
