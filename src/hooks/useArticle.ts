import auth from '@react-native-firebase/auth';
import { useRecoilValue } from 'recoil';

import { API } from 'src/config/apiConfig';
import { EP } from 'src/services/fetcher';
import { ArticlePostType } from 'src/types';
import { userIdAtom } from 'src/store/atoms';

export const useArticle = () => {
	const userId = useRecoilValue(userIdAtom);

	const postArticle = async (formInfo: ArticlePostType) => {
		try {
			const idToken = await auth().currentUser?.getIdToken();

			await API.post(EP.postArticle(userId), formInfo, {
				headers: { Authorization: 'Bearer' + ' ' + idToken },
			})
				.then(res => {
					return res;
				})
				.catch(e => {
					console.log(e);
					throw new Error(e);
				});
		} catch (e) {
			console.log(e);
		}
	};

	const deleteArticle = async (articleId: string) => {
		try {
			const idToken = await auth().currentUser?.getIdToken();

			await API.delete(EP.deleteArticle(articleId), {
				headers: { Authorization: 'Bearer' + ' ' + idToken },
			})
				.then(res => {
					return res;
				})
				.catch(e => {
					console.log(e);
					throw new Error(e);
				});
		} catch (e) {
			console.log(e);
		}
	};

	const putArticle = async (formInfo: ArticlePostType, articleId: string) => {
		try {
			const idToken = await auth().currentUser?.getIdToken();

			await API.put(EP.putArticle(articleId), formInfo, {
				headers: { Authorization: 'Bearer' + ' ' + idToken },
			})
				.then(res => {
					return res;
				})
				.catch(e => {
					console.log(e);
					throw new Error(e);
				});
		} catch (e) {
			console.log(e);
		}
	};

	return { postArticle, deleteArticle, putArticle };
};
