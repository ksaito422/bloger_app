import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SPACE, COLOR } from 'src/styles';
import { useNav } from 'src/hooks/useNav';

import { ArticleBox } from 'src/components/organisms/ArticleBox';
import { Spacing } from 'src/components/common/Spacing';

export const MyArticlesSection = () => {
	const { navigate } = useNav();

	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView>
				<Spacing vertical={2} />
				<ArticleBox title="タイトルが入ります" onPress={() => navigate('ArticleDetail')} />
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
