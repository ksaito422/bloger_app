import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width, height } = Dimensions.get('window');

// 共通padding
export const SPACE = {
	primary: width * 0.05,
	secondary: width * 0.03,
};

export const WINDOW = {
	width: width,
	height: height,
};

export const COLOR = {
	primary: '#2196f3',
	secondary: '#eeeeee',
	white: '#fafafa',
};
