import React, { useState, useEffect, FC } from 'react';
import auth from '@react-native-firebase/auth';
import { useSetRecoilState } from 'recoil';

import { authStateAtom } from 'src/store/atoms';

export const AuthStateProvider: FC = ({ children }) => {
	const [initializing, setInitializing] = useState(true);
	const setAuthState = useSetRecoilState(authStateAtom);

	const onAuthStateChanged = () => {
		initializing && setInitializing(false);
		setAuthState(true);
	};

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

		return subscriber;
	}, []);

	if (initializing) {
		return null;
	}

	return <>{children}</>;
};