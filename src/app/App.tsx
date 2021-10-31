import React from 'react';
import { RecoilRoot } from 'recoil';

import { Navigation } from 'src/app/Navigation';
import { AuthStateProvider } from 'src/app/AuthStateProvider';

export const App = () => {
	return (
		<RecoilRoot>
			<AuthStateProvider>
				<Navigation />
			</AuthStateProvider>
		</RecoilRoot>
	);
};
