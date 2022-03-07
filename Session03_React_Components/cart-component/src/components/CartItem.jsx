import React, { Component } from 'react';

class CartItem extends Component {
	state = { count: 0 };
	styles = {
		fontSize: 18,
	};

	handleIncrement = () => {
		this.setState({ count: this.state.count + 1 });
	};

	handleDecrement = () => {
		if (this.state.count > 0) this.setState({ count: this.state.count - 1 });
	};

	render() {
		return (
			<div>
				{this.props.children}
				<button onClick={this.handleDecrement} className="btn btn-dark btn-sm">
					-
				</button>
				<span className={this.getCounterClasses()}>{this.state.count}</span>
				<button onClick={this.handleIncrement} className="btn btn-dark btn-sm">
					+
				</button>
				<button
					onClick={this.props.onDelete}
					className="btn btn-danger btn-sm m-2"
				>
					Delete
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
}

export default CartItem;
