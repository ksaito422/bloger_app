import React, { FC } from 'react';
import { Input } from 'src/components/form/Input';
import { Controller } from 'react-hook-form';
import { RhfInputType } from 'src/types';

export const RhfInput: FC<RhfInputType> = ({
	name,
	defaultValue,
	placeHolder,
	control,
	multiline,
	keyboardType,
	autoCapitalize,
}) => {
	return (
		<Controller
			control={control}
			name={name}
			defaultValue={defaultValue}
			render={({ field: { onChange, value }, formState: { errors } }) => {
				return (
					<Input
						onChangeText={onChange}
						value={value}
						placeholder={placeHolder}
						error={errors[name]?.message}
						multiline={multiline}
						keyboardType={keyboardType}
						autoCapitalize={autoCapitalize}
					/>
				);
			}}
		/>
	);
};
