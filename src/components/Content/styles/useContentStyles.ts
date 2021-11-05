import { useRecoilValue } from "recoil";
import theme from "../../../store/Theme.recoil";
import { CSSProperties } from "react";

export const useContentStyles = (): { content: CSSProperties, item: CSSProperties, headItem: CSSProperties } => {
    const appTheme = useRecoilValue(theme);
    const styleObj: { content: CSSProperties, item: CSSProperties, headItem: CSSProperties } = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            minHeight: 'calc(100vh - 94px)',
            backgroundColor: appTheme === 'light' ? 'white' : '#4E6273',
        },
        item: {
            minWidth: '300px',
            margin: '10px',
            color: appTheme === 'light' ? 'black' : 'white',
            backgroundColor: appTheme === 'light' ? 'white' : '#4E6273',
        },
        headItem: {
            color: appTheme === 'light' ? 'black' : 'white',
            backgroundColor: appTheme === 'light' ? 'white' : '#4E6273',
        }
    }

    return styleObj;
};