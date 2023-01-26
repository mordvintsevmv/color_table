import React, {FC} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Button, CssBaseline, Stack} from "@mui/material";
import {darkTheme, lightTheme} from './mui/themes'
import {useTypedSelector} from "./hooks/typedHooks";
import Header from "./components/Header/Header";
import ColorTable from "./components/ColorTable/ColorTable";
import {ArrowBackIosNew, ArrowForwardIos} from "@mui/icons-material";
import {useActions} from "./hooks/useActions";
import SearchField from "./components/SearchField/SearchField";

const App: FC = () => {

    const theme = useTypedSelector(state => state.themeReducer)
    const {page, total_pages, total_colors , per_page} = useTypedSelector(state => state.colorReducer)
    const {setCurrentPage} = useActions()

    const prevPageHandler = () => {
        setCurrentPage(page - 1)
    }

    const nextPageHandler = () => {
        setCurrentPage(page + 1)
    }

    return (
        <ThemeProvider theme={theme === 'dark' ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <CssBaseline/>

            <div className="App">

                <Header/>

                <SearchField/>

                <ColorTable/>

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

            </div>
        </ThemeProvider>

    );
}

export default App;
