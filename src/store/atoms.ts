import { atom } from 'recoil';

export const authStateAtom = atom({
	key: 'authState',
	default: false,
});
