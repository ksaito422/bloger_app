import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteParamType } from 'src/app/Navigation';

type DrawerNavProp = DrawerNavigationProp<RouteParamType>;
type RouteNavProp = StackNavigationProp<RouteParamType>;
type AllNavProp = DrawerNavProp & RouteNavProp;

export const useNav = () => {
	const { navigate, reset, goBack, openDrawer } = useNavigation<AllNavProp>();

	return { navigate, reset, goBack, openDrawer };
};
