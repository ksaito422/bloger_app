import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card, Icon } from 'react-native-elements';
import useSWR from 'swr';
import { useRecoilValue } from 'recoil';

import { useNav } from 'src/hooks/useNav';
import { SPACE, COLOR } from 'src/styles';
import { useArticle } from 'src/hooks/useArticle';
import { EP, fetcherGet } from 'src/services/fetcher';
import { Spacing } from 'src/components/common/Spacing';
import { userIdAtom } from 'src/store/atoms';

export const ArticleDetailScreen = ({ route }) => {
	const { navigate } = useNav();
	const routeParams = route.params;
	const userId = useRecoilValue(userIdAtom);
	const { deleteArticle } = useArticle();

	const { data, error } = useSWR<Event>(EP.articleDetail(routeParams.articleId), fetcherGet);

	const onPressDelete = (articleId: string) => {
		deleteArticle(articleId);
	};

	return (
		<SafeAreaView edges={['bottom']} style={styles.safeAreaView}>
			<ScrollView>
				<Spacing vertical={2} />

				<Card containerStyle={styles.card}>
					<View style={styles.infoView}>
						<Text style={styles.info}>{data?.createdAt}</Text>
						<View style={styles.iconView}>
							{userId === data?.user.id && (
								// 本人の記事の場合、編集・削除アイコンを表示する
								<>
									<Icon
										name="edit"
										size={20}
										onPress={() =>
											navigate('ArticleEdit', {
												data,
											})
										}
									/>
									<Icon name="delete-outline" size={20} onPress={() => onPressDelete(data?.id)} />
								</>
							)}
						</View>
					</View>
					<Spacing vertical={1} />

					<Card.Title style={styles.title}>{data?.title}</Card.Title>
					<Card.Divider />

					<Text>{data?.content}</Text>
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
