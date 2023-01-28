import {ChangeEvent, FC, useEffect, useState} from "react";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/useActions";
import {InputAdornment, Stack, TextField} from "@mui/material";
import {Palette} from "@mui/icons-material";
import {useSearchParams} from "react-router-dom";

const SearchField: FC = () => {

    const [idValue, setIdValue] = useState('');
    const {findColorById, fetchColors} = useActions()
    const {page} = useTypedSelector(state => state.colorReducer)

    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=>{
        const searchID = searchParams.get('searchID')
        if(searchID){
            setIdValue(searchID)
        }
    },[])

    useEffect(()=>{
        if (idValue !== ''){
            findColorById(Number(idValue))
        }
    },[idValue])

    const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        if ((/\d/).test(event.target.value)) {

            setIdValue(event.target.value)

            searchParams.set('searchID', event.target.value)
            setSearchParams(searchParams)
        } else if (event.target.value === '') {

            setIdValue(event.target.value)
            fetchColors(page)

            searchParams.delete('searchID')
            setSearchParams(searchParams)
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