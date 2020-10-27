import React from 'react';
import { Row } from 'antd';
import { useQuery } from 'graphql-hooks';

import AtomPostItem from '../atoms/post-item';

import { postQuery } from '../../services/post';

const MoleculesPostSection = (props) => {
	const QUERY = props.isUserPosts && props.userId? postQuery.GET_USER_POSTS(props.userId) : postQuery.GET_POSTS;
	
	const { loading, error, data } = useQuery(
		QUERY
	)

	let posts
	if (!loading && data) {
		posts = props.userId? data.user.posts.data : data.posts.data;
	}
	if (loading && !data) return ''
	if (error) return 'Something Bad Happened'
	
	return (
		<Row gutter={[24, 24]}>
			{!loading && data ? (
				posts.map(({ id, ...restProps }) => (
					<AtomPostItem 
						key={id} 
						id={id}
						{...restProps} />
				)) 
				) : (
					null
				)
			}
		</Row>
	);
};

export default MoleculesPostSection;
