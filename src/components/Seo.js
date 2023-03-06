import * as React from 'react';

import { useStaticQuery, graphql } from 'gatsby';

function Seo({ title }) {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
	return (
		<title>
			{title} | {data.site.siteMetadata.title}
		</title>
	);
}

export default Seo;
