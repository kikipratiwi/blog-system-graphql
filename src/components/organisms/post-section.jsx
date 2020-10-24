import React from 'react';

import { Row } from 'antd';

import AtomPostItem from '../../components/atoms/post-item';
import MoleculesSectionHeader from '../../components/molecules/section-header';

const OrganismPostSection = (props) => {
  const author = props.user ? ` / by: ${props.user}` : '';

	return (
		<>
			<MoleculesSectionHeader title='Posts' author={author} />
			<Row gutter={[24, 24]}>
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
				<AtomPostItem />
			</Row>
		</>
	);
};

export default OrganismPostSection;
