import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import { SPACE, COLOR } from 'src/styles';

import { MyArticlesSection } from 'src/screens/User/components/MyArticlesSection';
import { ArticlePostSection } from 'src/screens/User/components/ArticlePostSection';

export const ArticleManagementScreen = () => {
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'first', title: '記事一覧' },
		{ key: 'second', title: '投稿' },
	]);

	const renderScene = SceneMap({
		first: MyArticlesSection,
		second: ArticlePostSection,
	});

	const renderTabBar = props => (
		<TabBar
			{...props}
			indicatorStyle={styles.indicator}
			style={styles.tabBar}
			labelStyle={styles.tabBarLabel}
		/>
	);

	return (
		<TabView
			navigationState={{ index, routes }}
			renderScene={renderScene}
			onIndexChange={setIndex}
			renderTabBar={renderTabBar}
			initialLayout={{ width: 500 }}
		/>
	);
};

const styles = StyleSheet.create({
	indicator: {
		backgroundColor: COLOR.primary,
	},
	tabBar: {
		backgroundColor: COLOR.white,
	},
	tabBarLabel: {
		color: COLOR.black,
	},
});
