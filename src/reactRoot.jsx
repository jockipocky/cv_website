import { observer } from "mobx-react-lite";
import { createHashRouter, RouterProvider } from "react-router-dom";

export function makeRouter(props){
    return createHashRouter([



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