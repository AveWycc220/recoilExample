import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import theme, { themeLabelButton } from "../../store/Theme.recoil";
import { Button } from "antd";
import { useSwitchThemeStyles } from "./styles/useSwitchThemeStyles";

export const SwitchTheme = () => {
    const setAppTheme = useSetRecoilState(theme);
    const appThemeLabel = useRecoilValue(themeLabelButton);
    const style = useSwitchThemeStyles();

    return (
        <div style={style}>
            <Button
                style={style}
                type="primary"
                onClick={() => setAppTheme((currVal) => currVal === 'light' ? 'dark' : 'light')}
            >
                {appThemeLabel}
            </Button>
        </div>
    )
}