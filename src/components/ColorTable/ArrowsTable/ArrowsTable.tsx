import React, {FC, useEffect} from "react";
import {Button, Stack} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
import {useTypedSelector} from "../../../hooks/typedHooks";
import {useActions} from "../../../hooks/useActions";
import {useSearchParams} from "react-router-dom";


const ArrowsTable: FC = () => {

    const {page, total_pages, total_colors , per_page} = useTypedSelector(state => state.colorReducer)
    const {setCurrentPage} = useActions()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(()=>{
        const searchPage = searchParams.get('page')
        if (searchPage){
            setCurrentPage(Number(searchPage))
        }
    },[])

    const prevPageHandler = () => {
        setCurrentPage(page - 1)

        searchParams.set('page', String(page - 1))
        setSearchParams(searchParams)
    }

    const nextPageHandler = () => {
        setCurrentPage(page + 1)

        searchParams.set('page', String(page + 1))
        setSearchParams(searchParams)
    }

    return(
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={10}
            mt={3}

        >
            <Button
                startIcon={<ArrowBackIosNew/>}
                disabled={page === 1 || total_colors <= per_page}
                onClick={prevPageHandler}
            >
                Prev
            </Button>

            <Button
                endIcon={<ArrowForwardIos/>}
                disabled={page === total_pages || total_colors <= per_page}
                onClick={nextPageHandler}
            >
                Next
            </Button>
        </Stack>

    )
}

export default ArrowsTable