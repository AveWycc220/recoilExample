import React from "react";
import { RecoilRoot } from "recoil";
import { ToDoApp } from "./pages/ToDoApp";
import "./App.css";
import { Loader } from "./components/Loader/Loader";

export const App = (): JSX.Element => {
    return (
        <RecoilRoot>
            <React.Suspense fallback={<Loader />}>
                <ToDoApp />
            </React.Suspense>
        </RecoilRoot>
    )
}