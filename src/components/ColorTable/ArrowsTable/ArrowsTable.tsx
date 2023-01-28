import React, {FC} from "react";
import {Button, Stack} from "@mui/material";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
import {useTypedSelector} from "../../../hooks/typedHooks";
import {useActions} from "../../../hooks/useActions";


const ArrowsTable: FC = () => {

    const {page, total_pages, total_colors , per_page} = useTypedSelector(state => state.colorReducer)
    const {setCurrentPage} = useActions()

    const prevPageHandler = () => {
        setCurrentPage(page - 1)
    }

    const nextPageHandler = () => {
        setCurrentPage(page + 1)
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