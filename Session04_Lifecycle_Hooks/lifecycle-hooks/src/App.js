import React from 'react';
import './App.css';
import GitHubUsersFunctional from './components/GitHubUsersFunctional';
import GitHubUsers from './components/GitHubUsers';
import UseEffectExample from './components/UseEffectExample';

function App() {
	return (
		<div className="App">
			<GitHubUsersFunctional />
			<GitHubUsers />
			{/* <UseEffectExample /> */}
			{/* <ClassComponentExample text="Class component" />
			<FunctionalComponent text="FunctionalComponent" />
			<ArrowFunctionalComponent text="ArrowFunctionalComponent" /> */}
		</div>
	);
}

class ClassComponentExample extends React.Component {
	render() {
		return (
			<div>
				<h5>{this.props.text}</h5>
			</div>
		);
	}
}

function FunctionalComponent(props) {
	return (
		<div>
			<h5>{props.text}</h5>
		</div>
	);
}

const ArrowFunctionalComponent = (props) => {
	return (
		<div>
			<h5>{props.text}</h5>
		</div>
	);
};

export default App;
