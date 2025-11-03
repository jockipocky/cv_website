import {createRoot} from "react-dom/client";
import { createElement } from "react";
import { ReactRoot } from "./reactRoot";
import { model } from "./model/mainModel";
import { observable, reaction } from "mobx";
const reactiveModel = observable(model);

createRoot(document.getElementById('root'))
    .render(
        <ReactRoot model = {reactiveModel} />

    ); 