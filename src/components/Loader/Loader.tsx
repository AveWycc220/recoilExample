import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons/lib";
import {useLoaderStyles} from "./styles/useLoaderStyles";

export const Loader = (): JSX.Element => {
    const styles = useLoaderStyles();

    return (
        <div style={styles}>
            <Spin indicator={<LoadingOutlined style={{fontSize: 128}} spin/>}/>
        </div>
    )
}