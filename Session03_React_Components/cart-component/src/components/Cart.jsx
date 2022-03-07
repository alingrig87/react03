import React, { Component } from 'react';
import CartItem from './CartItem';
import CartProduct from './CartProduct';

class Cart extends Component {
	state = {
		products: [
			{
				id: 1,
				name: 'iphone13',
				imgURL:
					'https://lcdn.altex.ro/resize/media/catalog/product/T/e/2bd48d28d1c32adea0e55139a4e6434a/Telefon_APPLE_iPhone_13_5G_128GB_Midnight_4_.jpg',
			},
			{
				id: 2,
				name: 'Motorola v3',
				imgURL:
					'https://s13emagst.akamaized.net/products/353/352715/images/img30067_05052006145051.jpg',
			},
			{
				id: 3,
				name: 'Siemens A50',
				imgURL:
					'https://www.manualdeinstructiuni.ro/thumbs/products/l/238982-siemens-a50.jpg',
			},
			{
				id: 4,
				name: 'Nokia 3310',
				imgURL:
					'https://s13emagst.akamaized.net/products/6022/6021774/images/res_f7eb764947d09b3a9971d9421f2efe27.jpg?width=450&height=450&hash=5EC396F76C19D9B60BAD8FFB2A61DBE5',
			},
		],
	};

	handleDelete = (productId) => {
		const filteredProducts = this.state.products.filter(
			(product) => productId != product.id
		);
		this.setState({ products: filteredProducts });
	};

	render() {
		return (
			<div>
				{this.state.products.map((product) => (
					<CartItem
						key={product.id}
						onDelete={() => this.handleDelete(product.id)}
					>
						<CartProduct name={product.name} imgURL={product.imgURL} />
					</CartItem>
				))}
			</div>
		);
	}
}

export default Cart;
