import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Icon } from 'react-native-elements';

import { useNav } from 'src/hooks/useNav';
import { SPACE, COLOR } from 'src/styles';

import { Spacing } from 'src/components/common/Spacing';

export const ArticleDetailScreen = () => {
	const { navigate } = useNav();
	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView>
				<Spacing vertical={2} />

				<Card containerStyle={styles.card}>
					<View style={styles.infoView}>
						<Text style={styles.info}>2021年1月1日</Text>
						<View style={styles.iconView}>
							<Icon name="edit" size={20} onPress={() => navigate('ArticleEdit')} />
							<Icon name="delete-outline" size={20} onPress={() => console.log('削除')} />
						</View>
					</View>
					<Spacing vertical={1} />

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
	infoView: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	iconView: {
		width: '15%',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	info: {
		color: COLOR.gray,
	},
});
