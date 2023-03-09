import * as React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/Seo';

const BlogPage = ({ data }) => {
	return (
		<Layout pageTitle='My Blog Posts'>
			{data.allMdx.nodes.map((node) => (
				<article key={node.id}>
					<h2>
						<Link to={`/blog/${node.frontmatter.slug}`}>
							{node.frontmatter.title}
						</Link>
						<p>Posted: {node.frontmatter.date}</p>
					</h2>
				</article>
			))}
			
		</Layout>
	);
};

export const query = graphql`
	query {
		allMdx(sort: { frontmatter: { date: DESC } }) {
			nodes {
				frontmatter {
					date
					title
					slug
				}
				id
				excerpt
			}
		}
	}
`;

export const Head = () => <Seo title='My Blog Posts' />;

export default BlogPage;
