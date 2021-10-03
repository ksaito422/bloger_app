import React from 'react';
import { RecoilRoot } from 'recoil';

import { Navigation } from 'src/app/Navigation';

export const App = () => {
	return (
		<RecoilRoot>
			<Navigation />
		</RecoilRoot>
	);
};
