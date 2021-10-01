import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteParamType } from 'src/app/Navigation';

type RouteNavProp = StackNavigationProp<RouteParamType>;

export const useNav = () => {
	const { navigate, reset, goBack } = useNavigation<RouteNavProp>();

	return { navigate, reset, goBack };
};
