import React from 'react';

import { Row, Divider } from 'antd';

import LayoutUserPublic from '../../components/layouts/user-public';
import AtomPostItem from '../../components/atoms/post-item';
import AtomSectionTitle from '../../components/atoms/section-title';

const UserPublic = () => {
	return (
		<LayoutUserPublic>
				<AtomSectionTitle 
					fontStyle='f3-ns fw4'
					sectionTitle='Posts'
				/>
      <Divider style={{ marginTop: 100 }} />
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
