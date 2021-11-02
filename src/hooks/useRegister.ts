import { useSetRecoilState } from 'recoil';
import auth from '@react-native-firebase/auth';
import { API } from 'src/config/apiConfig';

import { userIdAtom } from 'src/store/atoms';
import { UserType } from 'src/types';

type formInfoType = {
	name: string;
	email: string;
	password: string;
};

export const useRegister = () => {
	const setUserIdState = useSetRecoilState(userIdAtom);

	/**
	 * 新規登録 -> idToken取得 -> 新規登録APIの流れ
	 * @param formInfo
	 * @returns
	 */
	const register = async (formInfo: formInfoType) => {
		console.log(formInfo);

		try {
			await auth()
				.createUserWithEmailAndPassword(formInfo.email, formInfo.password)
				.then(res => {
					return res;
				})
				.catch(e => {
					throw new Error(e.code);
				});
			const idToken = await auth().currentUser?.getIdToken();

			const result = await API.post<UserType>(
				'api/v1/auth/register',
				{ name: formInfo.name },
				{
					headers: { Authorization: 'Bearer' + ' ' + idToken },
				}
			)
				.then(res => {
					console.log('>>> RES ', res);
					return res.data;
				})
				.catch(e => {
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
				if (e.message === 'auth/email-already-in-use') {
					console.log('email重複');
					return;
				}
			}

			return;
		}
	};

	return { register };
};
