import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { SPACE, COLOR } from 'src/styles';

import { ArticleBox } from 'src/components/organisms/ArticleBox';
import { Spacing } from 'src/components/common/Spacing';

export const MyArticlesSection = () => {
	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView>
				<Spacing vertical={2} />
				<ArticleBox title="タイトルが入ります" onPress={() => console.log('onPress')} />
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
