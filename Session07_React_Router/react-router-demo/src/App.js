import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Posts from './components/posts/Posts';
import PostPage from './components/posts/PostPage';
import Navbar from './components/layout/Navbar';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Switch>
				<Route path="/" exact>
					<Redirect to="/register" />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/posts" exact>
					<Posts />
				</Route>
				<Route path="/posts/:postId">
					<PostPage />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
