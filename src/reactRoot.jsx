import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";

import { Main } from "./presenter/mainPresenter";
import { Test } from "./presenter/testPresenter";

export function makeRouter(props){
    return createHashRouter([

        {
            path:"/",
            element: <Main model={props.model}/>
        },
        {
            path:"/test",
            element: <Test model={props.model}/>
        }

    ]);
}

    const ReactRoot = observer(
        function ReactRoot(props)
        {
            return (<div>
                <RouterProvider
                router={makeRouter(props)}/>
            </div>);
        }
    )


export {ReactRoot};