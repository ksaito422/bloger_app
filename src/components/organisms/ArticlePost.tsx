import React, { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { COLOR } from 'src/styles';
import { ArticlePostType } from 'src/types';
import { ArticlePostSchema } from 'src/schema';
import { useArticle } from 'src/hooks/useArticle';
import { RhfInput } from 'src/components/form/RhfInput';
import { Button } from 'src/components/button/Button';

export const ArticlePost: FC<ArticlePostType> = ({ title, content }) => {
	const { control, handleSubmit } = useForm({ resolver: yupResolver(ArticlePostSchema) });
	const { postArticle } = useArticle();

	const onSubmit: SubmitHandler<ArticlePostType> = formInfo => postArticle(formInfo);

	return (
		<View style={styles.container}>
			<View>
				<RhfInput
					name="title"
					placeHolder="タイトル"
					defaultValue={title}
					control={control}
					multiline
					autoCapitalize="none"
				/>
				<RhfInput
					name="content"
					placeHolder="内容"
					defaultValue={content}
					control={control}
					multiline
					autoCapitalize="none"
				/>
			</View>
			<Button title="投稿する" onPress={handleSubmit(onSubmit)} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
		backgroundColor: COLOR.white,
	},
});
