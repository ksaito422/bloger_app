import React, { FC } from 'react';
import { Input as EInput } from 'react-native-elements';
import { InputType } from 'src/types';

export const Input: FC<InputType> = ({ value, placeholder, onChangeText, error }) => {
	return (
		<EInput
			value={value}
			placeholder={placeholder}
			onChangeText={onChangeText}
			errorMessage={error}
		/>
	);
};
