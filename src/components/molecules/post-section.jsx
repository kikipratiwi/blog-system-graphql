import React from 'react';
import { Row } from 'antd';

import AtomPostItem from '../../components/atoms/post-item';

const MoleculesPostSection = (props) => {
	return (
		<Row gutter={[24, 24]}>
			<AtomPostItem />
			<AtomPostItem />
			<AtomPostItem />
			<AtomPostItem />
			<AtomPostItem />
			<AtomPostItem />
			<AtomPostItem />
		</Row>
	);
};

export default MoleculesPostSection;
