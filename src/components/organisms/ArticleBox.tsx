import React, { FC } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { ArticleBoxType } from 'src/types';

export const ArticleBox: FC<ArticleBoxType> = ({ onPress, title }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<Card containerStyle={styles.card}>
				<Card.Title style={styles.title}>{title}</Card.Title>
			</Card>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		margin: 0,
	},
	title: {
		textAlign: 'left',
	},
});
