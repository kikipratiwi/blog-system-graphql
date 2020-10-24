import React from 'react';

import LayoutUserPublic     from '../../components/layouts/user-public';
import OrganismPostSection 	from '../../components/organisms/post-section';

const UserPostList = (props) => {
	return (
		<LayoutUserPublic>
      <OrganismPostSection user='Eric Law' />
		</LayoutUserPublic>
	);
};

export default UserPostList;
