import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Button as EButton } from 'react-native-elements';
import { ButtonType } from 'src/types';
import { COLOR } from 'src/styles';

export const Button: FC<ButtonType> = ({ onPress, title }) => {
	return <EButton title={title} onPress={onPress} buttonStyle={styles.button} />;
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: COLOR.primary,
	},
});
