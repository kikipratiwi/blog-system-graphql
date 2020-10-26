import React from 'react';

import LayoutUserPublic     from '../../components/layouts/user-public';
import LayoutContainer     from '../../components/layouts/layout-container';
import MoleculesPostSection 	from '../../components/molecules/post-section';

const UserPostList = (props) => {
	return (
		<LayoutContainer title=''>
			<LayoutUserPublic title='Post' {...props} >
				<div style={{ marginTop: 100 }} />
				<MoleculesPostSection {...props} />
			</LayoutUserPublic>
		</LayoutContainer>
	);
};

export default UserPostList;
