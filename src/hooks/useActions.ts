import {useTypedDispatch} from "./typedHooks";
import {bindActionCreators} from "redux";
import * as themeActions from '../redux/action/themeActions'
import * as colorActions from '../redux/action/colorActions'
import * as modalColorActions from '../redux/action/modalColorActions'

export const useActions = () => {
    const dispatch = useTypedDispatch();
    return bindActionCreators({
        ...themeActions,
        ...colorActions,
        ...modalColorActions
    }, dispatch)
}
