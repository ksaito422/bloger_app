import { atom } from 'recoil';

export const authStateAtom = atom({
	key: 'authStateAtom',
	default: false,
});

export const userIdAtom = atom({
	key: 'userIdAtom',
	default: '',
});
