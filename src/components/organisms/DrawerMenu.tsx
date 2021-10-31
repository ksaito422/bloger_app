import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Divider, ListItem } from 'react-native-elements';
import { useRecoilState } from 'recoil';

import { authStateAtom } from 'src/store/atoms';
import { useLogout } from 'src/hooks/useLogout';
import { COLOR, SPACE } from 'src/styles';
import { useNav } from 'src/hooks/useNav';

import { Avatar } from 'src/components/common/Avatar';

interface MenuItem {
	title:
		| 'マイページ'
		| '記事の管理'
		| '利用規約'
		| 'プライバシーポリシー'
		| 'お問い合わせ'
		| 'ログアウト';
	onPress: () => void;
}

type AvatarType = {
	name: string;
};

export const DrawerMenu = ({ navigation }: any) => {
	const { navigate } = useNav();
	const [authState, setAuthState] = useRecoilState(authStateAtom);
	const { logout } = useLogout();

	const allMenus: MenuItem[] = [
		{
			title: 'マイページ',
			onPress: () => navigate('MyPage'),
		},
		{
			title: '記事の管理',
			onPress: () => navigate('ArticleManagement'),
		},
		{
			title: '利用規約',
			onPress: () => {
				console.log('利用規約');
			},
		},
		{
			title: 'プライバシーポリシー',
			onPress: () => {
				console.log('プライバシーポリシー');
			},
		},
		{
			title: 'お問い合わせ',
			onPress: () => {
				console.log('お問い合わせ');
			},
		},
		{
			title: 'ログアウト',
			onPress: () => logout(),
		},
	];

	/**
	 * ログイン状態に合わせて表示するメニューを変更する
	 */
	const filteredMenu: MenuItem[] = allMenus.filter(menu => {
		const menuItems = authState
			? [
					'マイページ',
					'記事の管理',
					'利用規約',
					'プライバシーポリシー',
					'お問い合わせ',
					'ログアウト',
			  ]
			: ['利用規約', 'プライバシーポリシー', 'お問い合わせ'];

		return menuItems.includes(menu.title);
	});

	/**
	 * ログイン状態に合わせてアバター表示を変更する
	 */
	const DrawerAvatar: FC<AvatarType> = ({ name }) => (
		<View style={styles.avatar}>
			<Avatar name={authState ? name : undefined} />
			<Text style={styles.avatarName}>{authState ? name : 'ゲスト'}</Text>
		</View>
	);

	return (
		<SafeAreaView style={styles.safeAreaView}>
			<DrawerAvatar name="Alex" />
			<Divider />
			{filteredMenu.map(item => (
				<ListItem key={item.title} bottomDivider onPress={item.onPress}>
					<ListItem.Content>
						<ListItem.Title>{item.title}</ListItem.Title>
					</ListItem.Content>
					<ListItem.Chevron />
				</ListItem>
			))}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		backgroundColor: COLOR.secondary,
	},
	menu: {
		height: '6%',
	},
	avatar: {
		height: '6%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: SPACE.secondary,
	},
	avatarName: {
		paddingLeft: SPACE.secondary,
	},
});
