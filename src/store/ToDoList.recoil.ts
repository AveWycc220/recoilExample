import { selector } from "recoil";

type ToDoList = { content: Array<ToDoListElem>; error: boolean }
type ToDoListElem = { userId: number; id: number; title: string; completed: boolean }

const toDoList = selector<ToDoList>({
    key: 'ToDoList',
    get: async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
        if (res.status !== 200) {
            return { content: [], error: true };
        }
        return { content: await res.json(), error: false };
    }
});

export default toDoList;