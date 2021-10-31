import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SPACE, COLOR } from 'src/styles';

import { ArticlePost } from 'src/components/organisms/ArticlePost';
import { Spacing } from 'src/components/common/Spacing';

export const ArticleEditScreen = () => {
	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Spacing vertical={2} />
				<ArticlePost title="テスト" content="テストです" />
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
	scrollView: {
		flexGrow: 1,
	},
});
