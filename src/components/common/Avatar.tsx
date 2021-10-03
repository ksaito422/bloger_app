import React, { FC } from 'react';
import { Avatar as EAvatar } from 'react-native-elements';

import { COLOR } from 'src/styles';

type AvatarType = {
	name?: string;
};

export const Avatar: FC<AvatarType> = ({ name }) => {
	return (
		<EAvatar
			rounded
			title={name?.charAt(0)}
			size="small"
			icon={{ name: 'user', type: 'font-awesome' }}
			overlayContainerStyle={{ backgroundColor: COLOR.gray }}
		/>
	);
};
