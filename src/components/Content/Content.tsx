import React from "react";
import { Card, Layout } from "antd";
import { useContentStyles } from "./styles/useContentStyles";
import { useRecoilValue } from "recoil";
import toDoList from "../../store/ToDoList.recoil";

export const Content = (): JSX.Element => {
    const style = useContentStyles();
    const appToDoList = useRecoilValue(toDoList);

    return <Layout.Content style={style.content}>
        {appToDoList.content.map((elem) => <Card title={elem.title} style={style.item} headStyle={style.headItem}>
            {elem.completed ? 'Completed' : 'Not Completed'}
        </Card>)}
    </Layout.Content>
}