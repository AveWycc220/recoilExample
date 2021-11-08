import React, {useState} from "react";
import { Card, Layout } from "antd";
import { useContentStyles } from "./styles/useContentStyles";
import { useRecoilValue } from "recoil";
import { Button } from "antd";
import { toDoListQuery } from "../../store/ToDoList.recoil";

export const Content = (): JSX.Element => {
    const style = useContentStyles();
    const [userId, setUserId] = useState<number>(1)
    const appToDoList = useRecoilValue(toDoListQuery({ userId }));

    return <Layout.Content style={style.content}>
        {appToDoList.content.map((elem) => <Card title={elem.title} style={style.item} headStyle={style.headItem}>
            {elem.completed ? 'Completed' : 'Not Completed'}
        </Card>)}
        <Button onClick={() => setUserId((prevState) => prevState + 1)}>Next</Button>
    </Layout.Content>
}