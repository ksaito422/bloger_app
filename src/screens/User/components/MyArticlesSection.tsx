import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useSWR from 'swr';
import { useRecoilValue } from 'recoil';

import { SPACE, COLOR } from 'src/styles';
import { useNav } from 'src/hooks/useNav';
import { EP, fetcherGet } from 'src/services/fetcher';
import { userIdAtom } from 'src/store/atoms';
import { ArticleBox } from 'src/components/organisms/ArticleBox';
import { Spacing } from 'src/components/common/Spacing';

export const MyArticlesSection = () => {
	const { navigate } = useNav();
	const userId = useRecoilValue(userIdAtom);

	const { data, error } = useSWR<Event>(EP.userArticle(userId), fetcherGet);

	// 記事詳細画面への遷移アクション
	const gotoArticleDetail = (id: string) => {
		navigate('ArticleDetail', {
			articleId: id,
		});
	};

	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView>
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
			</ScrollView>
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
