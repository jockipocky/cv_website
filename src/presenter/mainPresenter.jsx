import { observer, Observer } from "mobx-react-lite"
import { MainView } from "../view/mainView";

const Main = observer(function MainPresenter(props) {
    return ( 
        <MainView 
            model = {props.model}
        />
    );
});

export {Main};