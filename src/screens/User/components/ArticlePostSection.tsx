import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SPACE, COLOR } from 'src/styles';

import { Spacing } from 'src/components/common/Spacing';
import { ArticlePost } from 'src/components/organisms/ArticlePost';

export const ArticlePostSection = () => {
	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView contentContainerStyle={styles.scrollView}>
				<Spacing vertical={2} />
				<ArticlePost />
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
