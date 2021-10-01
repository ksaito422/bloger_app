import { FieldError } from 'react-hook-form';

export type ButtonType = {
	onPress: () => void;
	title?: string;
};

export type InputType = {
	value: string;
	placeholder: string;
	onChangeText: any;
	error?: string;
};

export type RhfInputType = {
	name: string;
	defaultValue?: string;
	placeHolder: string;
	control: any;
	error?: FieldError;
};

export type SpacingType = {
	vertical: number;
};

export type ArticleBoxType = {
	onPress: () => void;
	title: string;
};
