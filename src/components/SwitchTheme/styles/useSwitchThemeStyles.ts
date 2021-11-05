import theme from "../../../store/Theme.recoil";
import { useRecoilValue } from "recoil";
import { CSSProperties } from "react";

export const useSwitchThemeStyles = (): CSSProperties => {
    const appTheme = useRecoilValue(theme);
    const styleObj: CSSProperties = { display: 'flex', alignItems: 'center' }

    return Object.assign(styleObj, appTheme === 'light' ? {
        backgroundColor: '#167FFB',
    } : {
        color: 'black',
        backgroundColor: 'white',
    });
}