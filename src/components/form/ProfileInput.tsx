import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';

import { COLOR } from 'src/styles';
import { RhfInput } from 'src/components/form/RhfInput';

type ProfileInputType = {
	name: string;
	defaultValue: string;
	placeHolder: string;
	control: any;
};

export const ProfileInput: FC<ProfileInputType> = ({
	name,
	defaultValue,
	placeHolder,
	control,
}) => {
	return (
		<View style={styles.view}>
			<RhfInput
				name={name}
				defaultValue={defaultValue}
				placeHolder={placeHolder}
				control={control}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	view: {
		flexDirection: 'row',
		alignItems: 'baseline',
		backgroundColor: COLOR.white,
	},
});
