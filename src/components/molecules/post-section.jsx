import React, { setState, useEffect} from 'react';
import { useQuery } from 'graphql-hooks'
import { Row } from 'antd';

import AtomPostItem from '../../components/atoms/post-item';

const GET_POSTS = `
	query (
		$options: PageQueryOptions
	) {
		posts(options: $options) {
			data {
				id
				title
				body
			}
			meta {
				totalCount
			}
		}
	}
`;

const GET_USER_POSTS = (id) => {
	return `query {
		user(id: ${id}) {
			posts {
				data {
					id
					title
					body
				}
			}
		}
	}`
};

const MoleculesPostSection = (props) => {
	const QUERY = props.isUserPosts? GET_USER_POSTS(props.id) : GET_POSTS;

	const getUserParams = {
		variables: {
			"options": {
				"paginate": {
					"page": 1,
					"limit": 5
				}
			}
		}
	}

	const { loading, error, data } = useQuery(QUERY, {
		getUserParams
	})

	const posts = props.isUserPosts? data.user.posts.data : data.posts.data;

  if (loading && !data) return 'Loading...'
	if (error) return 'Something Bad Happened'
	
	return (
		<Row gutter={[24, 24]}>
			{console.log(posts)}
			{/* {data.user.posts.data.map(({ id, ...restProps }) => (
				<AtomPostItem key={id} {...restProps} />
			))} */}
		</Row>
	);
};

export default MoleculesPostSection;
