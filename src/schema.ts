import * as yup from 'yup';
import { string } from 'yup/lib/locale';

const REQUIRED = 'を入力してください。';
const EMAIL = '正しいメールアドレスを入力してください。';
const PASSWORD_MIN = '最低8文字以上入力してください。';
const PASSWORD_MAX = '最大20文字以内で入力してください。';
const PASSWORD_UPPER = '英大文字を含める必要があります。';
const PASSWORD_LOWER = '英小文字を含める必要があります。';
const PASSWORD_NUMBER = '数字を含める必要があります。';

export const RegisterSchema = yup.object().shape({
	name: yup //
		.string()
		.max(50, '最大50文字以内で入力してください')
		.required(`名前${REQUIRED}`),
	email: yup //
		.string()
		.email(EMAIL)
		.required(`メールアドレス${REQUIRED}`),
	password: yup //
		.string()
		.min(8, PASSWORD_MIN)
		.max(20, PASSWORD_MAX)
		.matches(/(?=.*[A-Z])/, PASSWORD_UPPER)
		.matches(/(?=.*[a-z])/, PASSWORD_LOWER)
		.matches(/(?=.*[0-9])/, PASSWORD_NUMBER)
		.required(`パスワード${REQUIRED}`),
});

export const LoginSchema = yup.object().shape({
	email: yup //
		.string()
		.email(EMAIL)
		.required(`メールアドレス${REQUIRED}`),
	password: yup //
		.string()
		.min(8, PASSWORD_MIN)
		.max(20, PASSWORD_MAX)
		.matches(/(?=.*[A-Z])/, PASSWORD_UPPER)
		.matches(/(?=.*[a-z])/, PASSWORD_LOWER)
		.matches(/(?=.*[0-9])/, PASSWORD_NUMBER)
		.required(`パスワード${REQUIRED}`),
});

export const ProfileSchema = yup.object().shape({
	name: yup //
		.string()
		.required(`ニックネーム${REQUIRED}`),
});

export const ArticlePostSchema = yup.object().shape({
	title: yup //
		.string()
		.required(`タイトル${REQUIRED}`),
	content: yup //object
		.string()
		.required(`内容${REQUIRED}`),
});
