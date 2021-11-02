import { API } from 'src/config/apiConfig';
import auth from '@react-native-firebase/auth';

export const EP = {
	login: () => 'api/v1/auth/login',
	register: () => 'api/v1/auth/register',
	unregister: () => 'api/v1/auth/unregister',
	user: (userId: string) => `api/v1/users/${userId}`,
	userArticle: (userId: string) => `api/v1/users/${userId}/articles`,
	articles: () => 'api/v1/articles',
	postArticle: (userId: string) => `api/v1/articles/${userId}`,
	articleDetail: (articleId: string) => `api/v1/articles/${articleId}`,
	putArticle: (articleId: string) => `api/v1/articles/${articleId}`,
	deleteArticle: (articleId: string) => `api/v1/articles/${articleId}`,
};

/**
 * tokenなし
 * @param url
 * @param params
 */
export const fetcherGetWithoutToken = (url: any, params: string = '{}') => {
	const response = API.get(url, {
		params: JSON.parse(params),
	})
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log('>>> GET [ERROR]', err.message, url, err.response);
		});

	return response;
};

export const fetcherGet = (url: string, params: string = '{}') => {
	const idToken = auth().currentUser?.getIdToken();

	const response = API.get(url, {
		headers: { Authorization: 'Bearer' + ' ' + idToken },
		params: JSON.parse(params),
	})
		.then(res => {
			return res.data;
		})
		.catch(err => {
			console.log('>>> GET [ERROR]', err.message, url, err.response);
		});

	return response;
};
