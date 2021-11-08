import { useRecoilValue } from "recoil";
import theme from "../../../store/Theme.recoil";
import { CSSProperties } from "react";

export const useLoaderStyles = (): CSSProperties => {
    const appTheme = useRecoilValue(theme);
    return  {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: appTheme === 'light' ? '#AAD5FF' : '#4A7496',
    }
};