import './SearchField.scss'
import {ChangeEvent, FC, useState} from "react";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/useActions";

const SearchField: FC = () => {

    const [idValue, setIdValue] = useState('');
    const {findColorById, fetchColors} = useActions()
    const {page} = useTypedSelector(state => state.colorReducer)

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if ((/\d/).test(event.target.value)){
            setIdValue(event.target.value)
            findColorById(Number(event.target.value))
        } else if (event.target.value === ''){
            setIdValue(event.target.value)
            fetchColors(page)
        }
    }

    return(
        <div>
            <input value={idValue} placeholder={'search by id'} onChange={inputChangeHandler}/>
        </div>
    )
}

export default SearchField