import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';

import { useNav } from 'src/hooks/useNav';
import { authStateAtom } from 'src/store/atoms';
import { SPACE, COLOR } from 'src/styles';
import { Spacing } from 'src/components/common/Spacing';
import { Button } from 'src/components/button/Button';
import { LoginForm } from 'src/components/organisms/LoginForm';
import { ArticleBox } from 'src/components/organisms/ArticleBox';

export const HomeScreen = () => {
	const { navigate } = useNav();
	const authState = useRecoilValue(authStateAtom);

	// 記事詳細画面への遷移アクション
	const gotoArticleDetail = () => {
		navigate('ArticleDetail');
	};

	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			{!authState && (
				<View style={styles.loginForm}>
					<LoginForm />
					<Spacing vertical={2} />
					<Button title="新規登録" onPress={() => navigate('Register')} />
				</View>
			)}

			<Spacing vertical={2} />

			<ArticleBox title="タイトルが入ります" onPress={() => gotoArticleDetail()} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeAreaView: {
		flex: 1,
		paddingHorizontal: SPACE.primary,
		backgroundColor: COLOR.secondary,
	},
	loginForm: {
		padding: SPACE.secondary,
		backgroundColor: COLOR.white,
	},
});
