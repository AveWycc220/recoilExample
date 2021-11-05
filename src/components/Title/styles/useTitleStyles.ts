import theme from "../../../store/Theme.recoil";
import { useRecoilValue } from "recoil";
import { CSSProperties } from "react";

export const useTitleStyles = (): CSSProperties => {
    const appTheme = useRecoilValue(theme);

    return Object.assign({ margin: '0' }, appTheme === 'light' ? { color: 'black' } : { color: 'white' });
}