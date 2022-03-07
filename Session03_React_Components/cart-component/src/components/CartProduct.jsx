import React, { Component } from 'react';

export default class CartProduct extends Component {
	render() {
		return (
			<>
				<span>{this.props.name}</span>
				<img style={{ width: 50, height: 50 }} src={this.props.imgURL} />
			</>
		);
	}
}
