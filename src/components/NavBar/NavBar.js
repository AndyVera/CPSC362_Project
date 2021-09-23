import React from 'react';
// import PropTypes from 'prop-types';
import styles from './NavBar.module.css';
import { Link } from 'react-router-dom';

const NavBar = () => (
	<div className={styles.NavBar}>
		<Link to="/">Home</Link> | 
		<Link to="/products">Products</Link> | 
		<Link to="/services">Services</Link> |
		<Link to="/about">About</Link>
	</div>
);

// NavBar.propTypes = {};

// NavBar.defaultProps = {};

export default NavBar;
