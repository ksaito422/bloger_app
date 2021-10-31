import { useResetRecoilState } from 'recoil';
import auth from '@react-native-firebase/auth';

import { userIdAtom } from 'src/store/atoms';

export const useLogout = () => {
	const resetUserIdState = useResetRecoilState(userIdAtom);

	const logout = async () => {
		try {
			await auth()
				.signOut()
				.then(res => {
					resetUserIdState();
					return res;
				})
				.catch(e => {
					throw new Error(e.code);
				});
		} catch (e) {
			// Firebaseのエラーをキャッチ
			if (e instanceof Error) {
				if (e.message === 'auth/too-many-requests') {
					console.log('リクエスト過多');
					return;
				}
			}

			return;
		}
	};

	return { logout };
};
