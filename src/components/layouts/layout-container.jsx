import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

import AtomHelmet from '../atoms/helmet';

const LayoutContainer = (props) => {
  const spacing = props.spacing || 'mh4 mh5-m mh5-l mv4';

	return (
		<LoadingOverlay
			active={props.isLoaderOverlayActive || false}
			spinner
			text="Loading..."
		>
			<AtomHelmet title={props.title} />

			<main className={spacing}>{props.children}</main>

		</LoadingOverlay>
	);
}

export default LayoutContainer; 
