import React, { FC } from 'react';
import { Avatar as EAvatar } from 'react-native-elements';

type AvatarType = {
	name: string;
	onPress: () => void;
};

export const Avatar: FC<AvatarType> = ({ name, onPress }) => {
	return <EAvatar rounded title={name} size="small" onPress={onPress} />;
};
