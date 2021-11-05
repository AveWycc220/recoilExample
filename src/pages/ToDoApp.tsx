import React from "react"
import { Layout } from "antd"
import { Footer } from "../components/Footer/Footer";
import { Content } from "../components/Content/Content";

export const ToDoApp = (): JSX.Element => {
    return (
        <Layout>
            <Footer />
            <Content />
        </Layout>
    )
}