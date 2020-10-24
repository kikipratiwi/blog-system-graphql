import React from 'react';

import { Row, Divider } from 'antd';

import LayoutUserPublic from '../../components/layouts/user-public';
import AtomPostItem from '../../components/atoms/post-item';
import AtomSectionTitle from '../../components/atoms/section-title';
import MoleculesSectionHeader from '../../components/molecules/section-header';

const UserPublic = () => {
	return (
		<LayoutUserPublic>
			<MoleculesSectionHeader title='Posts' />
			<Row gutter={[24, 24]}>
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
			</Row>
		</LayoutUserPublic>
	);
};

export default UserPublic;
