import React, { Component } from 'react';

class Counter extends Component {
	state = { count: 1 };

	styles = {
		fontSize: 25,
	};

	handleDecrement = () => {
		this.setState({ count: this.state.count - 1 });
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	render() {
		return (
			<div style={{ fontSize: 30 }} className="container">
				<button onClick={this.handleDecrement} className="btn btn-dark btn-sm">
					-
				</button>
				<span className={this.getCounterClasses()}>{this.formatCount()}</span>
				<button onClick={this.handleIncrement} className="btn btn-dark btn-sm">
					+
				</button>
			</div>
		);
	}

	getCounterClasses() {
		let classes = 'badge m-2 bg-';
		const { count } = this.state;
		classes += count === 0 ? 'warning' : 'info';
		return classes;
	}

	formatCount() {
		const { count } = this.state;
		return count == 0 ? 'Zero' : count;
	}
}

export default Counter;
