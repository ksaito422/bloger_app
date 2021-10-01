import React, { FC } from 'react';
import { View } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { LoginSchema } from 'src/schema';

import { useLogin } from 'src/hooks/useLogin';
import { RhfInput } from 'src/components/form/RhfInput';
import { Button } from 'src/components/button/Button';

type FormInfoType = {
	email: string;
	password: string;
};

export const LoginForm: FC = () => {
	const { control, handleSubmit } = useForm({ resolver: yupResolver(LoginSchema) });
	const { login } = useLogin();

	const onSubmit: SubmitHandler<FormInfoType> = formInfo => login(formInfo);

	return (
		<View>
			<View>
				<RhfInput name="email" placeHolder="email" control={control} />
				<RhfInput name="password" placeHolder="password" control={control} />
			</View>
			<Button title="ログイン" onPress={handleSubmit(onSubmit)} />
		</View>
	);
};
