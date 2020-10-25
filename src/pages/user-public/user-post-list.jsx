import React from 'react';
import { Divider } from 'antd';

import LayoutUserPublic     from '../../components/layouts/user-public';
import LayoutContainer     from '../../components/layouts/layout-container';
import MoleculesPostSection 	from '../../components/molecules/post-section';

const UserPostList = (props) => {
	return (
		<LayoutContainer title=''>
			<LayoutUserPublic title='Post' user='Eric Law'>
				<div style={{ marginTop: 100 }} />
				<MoleculesPostSection />
			</LayoutUserPublic>
		</LayoutContainer>
	);
};

export default UserPostList;
