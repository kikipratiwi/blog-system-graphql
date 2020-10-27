import React, { useState, useEffect} from 'react';
import { useQuery } from 'graphql-hooks'
import { Row } from 'antd';

import AtomPostItem from '../../components/atoms/post-item';
import { postQuery, postParams } from '../../services/post';

const MoleculesPostSection = (props) => {
	const QUERY = props.isUserPosts? postQuery.GET_USER_POSTS(props.id) : postQuery.GET_POSTS;

	const { loading, error, data } = useQuery(
		QUERY,
		postParams.GET_POSTS()
	)

	let posts
	if (!loading && data) {
		posts = props.isUserPosts? data.user.posts.data : data.posts.data;
	}
	if (loading && !data) return 'Loading...'
	if (error) return 'Something Bad Happened'
	
	return (
		<Row gutter={[24, 24]}>
			{!loading && data ? (
				posts.map(({ id, ...restProps }) => (
					<AtomPostItem key={id} {...restProps} />
				)) 
				) : (
					null
				)
			}
		</Row>
	);
};

export default MoleculesPostSection;
