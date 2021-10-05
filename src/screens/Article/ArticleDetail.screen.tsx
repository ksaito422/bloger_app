import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-elements';

import { SPACE, COLOR } from 'src/styles';

import { Spacing } from 'src/components/common/Spacing';

export const ArticleDetailScreen = () => {
	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView>
				<Spacing vertical={2} />

				<Card containerStyle={styles.card}>
					<Card.Title style={styles.title}>記事タイトルが入ります</Card.Title>
					<Card.Divider />

					<Text>記事の内容が入ります。記事の内容が入ります。記事の内容が入ります。</Text>
				</Card>
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
	card: {
		margin: 0,
	},
	title: {
		textAlign: 'left',
	},
});
