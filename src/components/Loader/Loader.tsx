import React from "react";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons/lib";

export const Loader = (): JSX.Element => (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin indicator={<LoadingOutlined style={{fontSize: 128}} spin/>}/>
    </div>
)