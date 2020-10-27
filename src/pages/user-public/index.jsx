import React from 'react';
import { Divider } from 'antd';

import AtomSectionBody from '../../components/atoms/section-body';
import AtomSectionTitle from '../../components/atoms/section-title';
import LayoutContainer from '../../components/layouts/layout-container';
import LayoutUserPublic from '../../components/layouts/user-public';
import MoleculesPostSection from '../../components/molecules/post-section';

const UserPublic = (props) => {
	const body = "BLOG. is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const sectionBodySize = { md: 16 };

	return (
		<LayoutContainer title=''>
			<LayoutUserPublic title='Introduction'>
				
				<Divider style={{ marginTop: 100 }} />
				
				<AtomSectionBody size={sectionBodySize}>
					{body}
				</AtomSectionBody>

				<div className="mt5 mb3 mv6-m mv6-l">
					<AtomSectionTitle title='Post'/>
				</div>

				<MoleculesPostSection {...props} isUserPosts={false} />
			</LayoutUserPublic>
		</LayoutContainer>
	);
};

export default UserPublic;
