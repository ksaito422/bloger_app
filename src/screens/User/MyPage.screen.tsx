import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useSWR from 'swr';
import { useRecoilValue } from 'recoil';

import { ProfileSchema } from 'src/schema';
import { SPACE, COLOR } from 'src/styles';
import { useDeleteUser } from 'src/hooks/useDeleteUser';
import { EP, fetcherGet } from 'src/services/fetcher';
import { userIdAtom } from 'src/store/atoms';
import { Spacing } from 'src/components/common/Spacing';
import { Avatar } from 'src/components/common/Avatar';
import { ProfileInput } from 'src/components/form/ProfileInput';
import { Button } from 'src/components/button/Button';

export const MyPageScreen = () => {
	const { control } = useForm({ resolver: yupResolver(ProfileSchema) });
	const { deleteUser } = useDeleteUser();
	const userId = useRecoilValue(userIdAtom);

	const { data, error } = useSWR<Event>(EP.user(userId), fetcherGet);

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
					defaultValue={data?.name}
					placeHolder="ニックネーム"
					control={control}
				/>

				<ProfileInput
					name="メールアドレス"
					defaultValue={data?.email}
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
