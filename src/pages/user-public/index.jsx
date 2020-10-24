import React from 'react';

import LayoutUserPublic 			from '../../components/layouts/user-public';
import AtomSectionBody 				from '../../components/atoms/section-body';
import MoleculesSectionHeader from '../../components/molecules/section-header';
import OrganismPostSection 		from '../../components/organisms/post-section';

const UserPublic = () => {
	const body = "BLOG. is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const sectionBodySize = { md: 16 }

	return (
		<LayoutUserPublic>
      <MoleculesSectionHeader title='Introduction' />
      <AtomSectionBody size={sectionBodySize} >
        {body}
      </AtomSectionBody>
			<div className="mv6">
				<OrganismPostSection />
			</div>
		</LayoutUserPublic>
	);
};

export default UserPublic;
