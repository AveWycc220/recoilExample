import { Typography } from "antd";
import React from "react";
import { useTitleStyles } from "./styles/useTitleStyles";

export const Title = () => {
    const style = useTitleStyles();

    return <Typography.Title style={style}>ToDoApp</Typography.Title>;
}