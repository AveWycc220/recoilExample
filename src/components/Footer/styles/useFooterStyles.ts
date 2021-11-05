import { useRecoilValue } from "recoil";
import theme from "../../../store/Theme.recoil";
import { CSSProperties } from "react";

export const useFooterStyles = (): CSSProperties => {
    const appTheme = useRecoilValue(theme);
    const styleObj: CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

    return Object.assign(styleObj,appTheme === 'light' ? {
        backgroundColor: '#AAD5FF',
    } : {
        backgroundColor: '#4A7496',
    });
};