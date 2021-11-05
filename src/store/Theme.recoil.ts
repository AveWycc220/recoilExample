import { atom, selector } from "recoil";

type Theme = 'light' | 'dark'
type ThemeLabelButton = 'Light Theme' | 'Dark Theme'

const theme = atom<Theme>({
    key: 'theme',
    default: 'light',
});

export const themeLabelButton = selector<ThemeLabelButton>({
    key: 'themeLabel',
    get: ({ get }) => {
        const appTheme = get(theme);
        return `${appTheme === 'light' ? 'Dark' : 'Light'} Theme`;
    }
})

export default theme;