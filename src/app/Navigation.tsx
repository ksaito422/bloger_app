import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MyHeader } from 'src/components/organisms/Header';

import { HomeScreen } from 'src/screens/Home/Home.screen';
import { RegisterScreen } from 'src/screens/Auth/Register.screen';

/**
 * ナビゲーション名 & 遷移時に渡すパラメータ
 */
export type RouteParamType = {
	Home: undefined;
	Register: undefined;
};

const Stack = createStackNavigator<RouteParamType>();

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
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Register" component={RegisterScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};
