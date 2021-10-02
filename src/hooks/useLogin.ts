import { useSetRecoilState } from 'recoil';

import { authStateAtom } from 'src/store/atoms';

export const useLogin = () => {
	const setAuthState = useSetRecoilState(authStateAtom);

	const login = formInfo => {
		console.log(formInfo);

		setAuthState(true);
	};

	return { login };
};
