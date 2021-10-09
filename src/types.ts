import { FieldError } from 'react-hook-form';

export type ButtonType = {
	onPress: () => void;
	title?: string;
	isDanger?: boolean;
};

export type InputType = {
	value: string;
	placeholder: string;
	onChangeText: any;
	error?: string;
	multiline?: boolean;
	keyboardType?: 'default' | 'numeric' | 'email-address';
	autoCapitalize?: 'none' | 'words' | 'sentences' | 'characters';
};

export type RhfInputType = {
	name: string;
	defaultValue?: string;
	placeHolder: string;
	control: any;
	error?: FieldError;
	multiline?: boolean;
	keyboardType?: 'default' | 'numeric' | 'email-address';
	autoCapitalize?: 'none' | 'words' | 'sentences' | 'characters';
};

export type SpacingType = {
	vertical: number;
};

export type ArticleBoxType = {
	onPress: () => void;
	title: string;
};

export type ArticlePostType = {
	title?: string;
	content?: string;
};
