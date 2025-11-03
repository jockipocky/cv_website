import { observer, Observer } from "mobx-react-lite"
import { TestView } from "../view/testView";

const Test = observer(function TestPresenter(props) {
    return ( 
        <TestView 
            model = {props.model}
        />
    );
});

export {Test};