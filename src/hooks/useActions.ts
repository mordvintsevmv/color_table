import {useTypedDispatch} from "./typedHooks";
import {bindActionCreators} from "redux";
import * as themeActions from '../redux/action/themeActions'

export const useActions = () => {
    const dispatch = useTypedDispatch();
    return bindActionCreators({
        ...themeActions
    }, dispatch)
}
