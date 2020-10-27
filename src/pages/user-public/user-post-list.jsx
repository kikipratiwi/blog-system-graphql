import React from 'react';
import { useParams } from 'react-router';
import { useQuery } from 'graphql-hooks';

import LayoutUserPublic from '../../components/layouts/user-public';
import LayoutContainer from '../../components/layouts/layout-container';
import MoleculesPostSection from '../../components/molecules/post-section';

import { postQuery } from '../../services/post';

const UserPostList = (props) => {	
  const { userId } = useParams(); 
	const { loading, data } = useQuery(
		postQuery.GET_USER(userId)
	)
		
	let author
	if (!loading && data) author = data.user.name;

	return (
		<>
		{!loading && data ? (
			<LayoutContainer title={`by ${author}`}>
				<LayoutUserPublic title='Post' user={author} >
					<div style={{ marginTop: 100 }} />
					<MoleculesPostSection isUserPosts={true} userId={userId} {...props} />
				</LayoutUserPublic>
			</LayoutContainer>
			) : (
				null
			)
		}
		</>
	);
};

export default UserPostList;
