import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { getHeaderTitle } from '@react-navigation/elements';
import { useRecoilValue } from 'recoil';

import { ButtonType } from 'src/types';
import { authStateAtom } from 'src/store/atoms';
import { useNav } from 'src/hooks/useNav';
import { COLOR, SPACE } from 'src/styles';

import { Avatar } from 'src/components/common/Avatar';

/**
 * 共通ヘッダーコンポーネント
 * @returns
 */

const Back: FC<ButtonType> = ({ onPress }) => {
	return (
		<TouchableOpacity onPress={onPress} style={styles.back}>
			<Icon name="chevron-left" size={20} />
		</TouchableOpacity>
	);
};

export const MyHeader = ({ navigation, route, options, back }: any) => {
	const { goBack } = useNav();
	const title = getHeaderTitle(options, route.name);

	const authState = useRecoilValue(authStateAtom);

	return (
		<Header
			centerComponent={{ text: title }}
			leftComponent={back ? <Back onPress={() => goBack()} /> : undefined}
			rightComponent={
				authState ? <Avatar name="A" onPress={() => console.log('Avatar')} /> : undefined
			}
			containerStyle={styles.header}
		/>
	);
};

const styles = StyleSheet.create({
	header: {
		backgroundColor: COLOR.primary,
	},
	back: {
		paddingRight: SPACE.secondary,
	},
});
