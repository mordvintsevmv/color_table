import './SearchField.scss'
import {ChangeEvent, FC, useState} from "react";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/useActions";
import {InputAdornment, Stack, TextField} from "@mui/material";
import {Palette} from "@mui/icons-material";

const SearchField: FC = () => {

    const [idValue, setIdValue] = useState('');
    const {findColorById, fetchColors} = useActions()
    const {page} = useTypedSelector(state => state.colorReducer)

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if ((/\d/).test(event.target.value)) {
            setIdValue(event.target.value)
            findColorById(Number(event.target.value))
        } else if (event.target.value === '') {
            setIdValue(event.target.value)
            fetchColors(page)
        }
    }

    return (
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            mt={3}
            mb={6}
        >
            <TextField
                InputProps={{
                    startAdornment: <InputAdornment position="start"><Palette/></InputAdornment>,
                }}
                value={idValue}
                placeholder={'search by id'}
                size={'small'}
                onChange={inputChangeHandler}/>
        </Stack>
    )
}

export default SearchField