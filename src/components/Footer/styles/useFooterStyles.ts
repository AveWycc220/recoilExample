import { useRecoilValue } from "recoil";
import theme from "../../../store/Theme.recoil";
import { CSSProperties } from "react";

export const useFooterStyles = (): CSSProperties => {
    const appTheme = useRecoilValue(theme);
    return  {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: appTheme === 'light' ? '#AAD5FF' : '#4A7496',
    }
};