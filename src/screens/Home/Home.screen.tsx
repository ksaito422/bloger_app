import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import useSWR from 'swr';

import { useNav } from 'src/hooks/useNav';
import { authStateAtom } from 'src/store/atoms';
import { EP, fetcherGetWithoutToken } from 'src/services/fetcher';
import { SPACE, COLOR } from 'src/styles';
import { Spacing } from 'src/components/common/Spacing';
import { Button } from 'src/components/button/Button';
import { LoginForm } from 'src/components/organisms/LoginForm';
import { ArticleBox } from 'src/components/organisms/ArticleBox';

export const HomeScreen = () => {
	const { navigate } = useNav();
	const authState = useRecoilValue(authStateAtom);

	const { data, error } = useSWR<Event>(EP.articles, fetcherGetWithoutToken);

	// 記事詳細画面への遷移アクション
	const gotoArticleDetail = (id: string) => {
		navigate('ArticleDetail', {
			articleId: id,
		});
	};

	return (
		<ScrollView>
			<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
				{!authState && (
					<View style={styles.loginForm}>
						<LoginForm />
						<Spacing vertical={2} />
						<Button title="新規登録" onPress={() => navigate('Register')} />
					</View>
				)}

				<Spacing vertical={2} />

				{data?.map(item => {
					return (
						<ArticleBox
							key={item.id}
							title={item.title}
							onPress={() => gotoArticleDetail(item.id)}
						/>
					);
				})}
			</SafeAreaView>
		</ScrollView>
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
