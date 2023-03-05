import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const AboutPage = () => {
	return (
		<Layout pageTitle={'About Me'}>
			<p>
				Hi there! I'm the proud creator of this site, which I built with Gatsby.
			</p>
      <StaticImage src="../images/bunia.jpg" alt="Bunia, authors dog." />
		</Layout>
	);
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
