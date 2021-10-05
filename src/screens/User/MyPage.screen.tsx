import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ProfileSchema } from 'src/schema';
import { SPACE, COLOR } from 'src/styles';
import { useDeleteUser } from 'src/hooks/useDeleteUser';

import { Spacing } from 'src/components/common/Spacing';
import { Avatar } from 'src/components/common/Avatar';
import { ProfileInput } from 'src/components/form/ProfileInput';
import { Button } from 'src/components/button/Button';

export const MyPageScreen = () => {
	const { control } = useForm({ resolver: yupResolver(ProfileSchema) });
	const { deleteUser } = useDeleteUser();

	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<View>
				<Spacing vertical={2} />

				<View style={styles.avatar}>
					<Avatar name={'Alex'} />
				</View>

				<Spacing vertical={2} />

				<ProfileInput
					name="ニックネーム"
					defaultValue="Alex"
					placeHolder="ニックネーム"
					control={control}
				/>

				<ProfileInput
					name="メールアドレス"
					defaultValue="kt.saitooo@gmail.com"
					placeHolder="メールアドレス"
					control={control}
				/>
			</View>

			<Button title="退会する" onPress={() => deleteUser()} isDanger />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		paddingHorizontal: SPACE.primary,
		backgroundColor: COLOR.secondary,
		justifyContent: 'space-between',
	},
	avatar: {
		alignItems: 'center',
	},
});
