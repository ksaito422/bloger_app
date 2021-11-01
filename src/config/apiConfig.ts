import axiosBase from 'axios';

export const API = axiosBase.create({
	baseURL: 'http://localhost:8000/',
	headers: {
		'Content-Type': 'application/json',
		'X-Requested-With': 'XMLHttpRequest',
	},
	responseType: 'json',
	timeout: 1500,
	withCredentials: true,
});

// Requestの内容をログに出力
API.interceptors.request.use(req => {
	console.log('>>> Request', JSON.stringify(req, null, 2));
	return req;
});

// Responseの内容をログに出力
API.interceptors.response.use(res => {
	console.log('>>> Response', JSON.stringify(res, null, 2));
	return res;
});
