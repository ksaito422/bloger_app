import { useSetRecoilState } from 'recoil';
import auth from '@react-native-firebase/auth';
import { API } from 'src/config/apiConfig';

import { userIdAtom } from 'src/store/atoms';
import { UserType } from 'src/types';

type formInfoType = {
	email: string;
	password: string;
};

export const useLogin = () => {
	const setUserIdState = useSetRecoilState(userIdAtom);

	/**
	 * ログイン -> idToken取得 -> ログインAPIの流れ
	 * @param formInfo
	 * @returns
	 */
	const login = async (formInfo: formInfoType) => {
		try {
			await auth()
				.signInWithEmailAndPassword(formInfo.email, formInfo.password)
				.then(res => {
					return res;
				})
				.catch(e => {
					throw new Error(e.code);
				});
			const idToken = await auth().currentUser?.getIdToken();

			console.log('>>> ID_TOKEN ', idToken);

			const result = await API.post<UserType>(
				'api/v1/auth/login',
				{},
				{
					headers: { Authorization: 'Bearer' + ' ' + idToken },
				}
			)
				.then(res => {
					console.log('>>> RES ', res);
					return res.data;
				})
				.catch(e => {
					console.log(e);
					throw new Error(e);
				});

			setUserIdState(result.id);
		} catch (e) {
			// Firebaseのエラーをキャッチ
			if (e instanceof Error) {
				if (e.message === 'auth/too-many-requests') {
					console.log('リクエスト過多');
					return;
				}
				if (e.message === 'auth/invalid-password') {
					console.log('ユーザーは存在しません');
					return;
				}
				if (e.message === 'auth/invalid-email') {
					console.log('ユーザーは存在しません');
					return;
				}
			}

			return;
		}
	};

	return { login };
};
