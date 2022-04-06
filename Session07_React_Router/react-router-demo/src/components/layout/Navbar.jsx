import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
	return (
		<div className="navbar">
			<ul>
				<li>
					<NavLink activeClassName="active" to="/register">
						Register
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/login">
						Login
					</NavLink>
				</li>
				<li>
					<NavLink activeClassName="active" to="/posts">
						Posts
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
