import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';

import { SPACE, COLOR } from 'src/styles';
import { RegisterForm } from 'src/components/organisms/RegisterForm';

export const RegisterScreen = () => {
	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<RegisterForm />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		paddingHorizontal: SPACE.primary,
		backgroundColor: COLOR.secondary,
	},
});
