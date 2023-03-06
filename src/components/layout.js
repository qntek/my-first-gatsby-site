import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {
	container,
	heading,
	navLinks,
	navLinkItem,
	navLinkText,
	siteTitle,
} from './layout.module.css';

function Layout({ pageTitle, children }) {
	const title = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	return (
		<div className={container}>
			<header className={siteTitle}>{title.site.siteMetadata.title}</header>
			<nav>
				<ul className={navLinks}>
					<li className={navLinkItem}>
						<Link to='/' className={navLinkText}>
							Home
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to='/about' className={navLinkText}>
							About
						</Link>
					</li>
					<li className={navLinkItem}>
						<Link to='/blog' className={navLinkText}>
							Blog
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 className={heading}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	);
}

export default Layout;
