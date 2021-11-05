import React from "react";
import { Layout } from "antd";
import { useFooterStyles } from "./styles/useFooterStyles";
import { Title } from "../Title/Title";
import { SwitchTheme } from "../SwitchTheme/SwitchTheme";

export const Footer = (): JSX.Element => {
    const style = useFooterStyles();

    return (
        <Layout.Footer style={style}>
            <Title />
            <SwitchTheme />
        </Layout.Footer>
    )
}