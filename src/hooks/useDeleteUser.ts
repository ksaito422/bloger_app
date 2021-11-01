import { useResetRecoilState } from 'recoil';
import auth from '@react-native-firebase/auth';
import { API } from 'src/config/apiConfig';

import { authStateAtom, userIdAtom } from 'src/store/atoms';
import { useNav } from 'src/hooks/useNav';

export const useDeleteUser = () => {
	const resetAuthState = useResetRecoilState(authStateAtom);
	const resetUserId = useResetRecoilState(userIdAtom);
	const { reset } = useNav();

	const deleteUser = async () => {
		try {
			const idToken = await auth().currentUser?.getIdToken();

			await API.delete('api/v1/auth/unregister', {
				headers: { Authorization: 'Bearer' + ' ' + idToken },
			})
				.then(() => {
					auth().currentUser?.delete();
				})
				.catch(e => {
					throw new Error(e);
				});

			resetAuthState();
			resetUserId();

			await reset({
				index: 0,
				routes: [{ name: 'Top' }],
			});
		} catch (e) {
			// Firebaseのエラーをキャッチ
			if (e instanceof Error) {
				if (e.message === 'auth/too-many-requests') {
					console.log('リクエスト過多');
					return;
				}
			}

			console.log('>>> ERROR ', e);
			return;
		}
	};

	return { deleteUser };
};
