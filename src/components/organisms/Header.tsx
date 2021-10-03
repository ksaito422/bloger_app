import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { getHeaderTitle } from '@react-navigation/elements';

import { ButtonType } from 'src/types';
import { useNav } from 'src/hooks/useNav';
import { COLOR, SPACE } from 'src/styles';

/**
 * 共通ヘッダーコンポーネント
 * @returns
 */

const Back: FC<ButtonType> = ({ onPress }) => {
	return <Icon name="chevron-left" size={20} onPress={onPress} style={styles.back} />;
};

export const MyHeader = ({ navigation, route, options, back }: any) => {
	const { goBack, openDrawer } = useNav();
	const title = getHeaderTitle(options, route.name);

	return (
		<Header
			centerComponent={{ text: title }}
			leftComponent={back ? <Back onPress={() => goBack()} /> : undefined}
			rightComponent={
				route.name === 'Home' ? (
					<Icon name="menu" size={15} onPress={() => openDrawer()} />
				) : undefined
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
