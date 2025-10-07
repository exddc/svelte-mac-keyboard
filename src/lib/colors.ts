export type KeyboardTheme = {
	bgColor: string;
	keyBgColor: string;
	keyTextColor: string;
	keyActiveBgColor: string;
	borderColor: string;
	keyInsetBorderColor: string;
};

export const themes: Record<'dark' | 'light', KeyboardTheme> = {
	dark: {
		bgColor: 'bg-[#67666b]',
		keyBgColor: 'bg-[#161920]',
		keyTextColor: 'text-[#c2c5ca]',
		keyActiveBgColor: 'bg-[#1f2125]',
		borderColor: 'border-transparent',
		keyInsetBorderColor: 'border-b-zinc-700'
	},
	light: {
		bgColor: 'bg-[#c0c1c3]',
		keyBgColor: 'bg-[#f0f1f3]',
		keyTextColor: 'text-[#aaabad]',
		keyActiveBgColor: 'bg-[#eeeeee]',
		borderColor: 'border-transparent',
		keyInsetBorderColor: 'border-b-gray-400'
	}
};
