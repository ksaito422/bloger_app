import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { MyHeader } from 'src/components/organisms/Header';
import { DrawerMenu } from 'src/components/organisms/DrawerMenu';

import { HomeScreen } from 'src/screens/Home/Home.screen';
import { RegisterScreen } from 'src/screens/Auth/Register.screen';
import { MyPageScreen } from 'src/screens/User/MyPage.screen';
import { ArticleDetailScreen } from 'src/screens/Article/ArticleDetail.screen';

/**
 * ナビゲーション名 & 遷移時に渡すパラメータ
 */
export type RouteParamType = {
	Top: undefined;
	Home: undefined;
	Register: undefined;
	MyPage: undefined;
	ArticleDetail: undefined;
};

const Stack = createStackNavigator<RouteParamType>();
const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
	return (
		<Drawer.Navigator
			drawerContent={props => <DrawerMenu {...props} />}
			screenOptions={({ route }) => ({
				header: () => <MyHeader route={route} options={'option'} />,
				drawerType: 'front',
			})}
		>
			<Drawer.Screen name="Home" component={HomeScreen} />
		</Drawer.Navigator>
	);
};

export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={({ route, navigation }) => ({
					header: () => (
						<MyHeader
							route={route}
							options={'option'}
							back={navigation.canGoBack()}
							navigation={navigation}
						/>
					),
				})}
			>
				<Stack.Screen name="Top" component={DrawerNavigation} options={{ headerShown: false }} />
				<Stack.Screen name="Register" component={RegisterScreen} />
				<Stack.Screen name="MyPage" component={MyPageScreen} />
				<Stack.Screen name="ArticleDetail" component={ArticleDetailScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
