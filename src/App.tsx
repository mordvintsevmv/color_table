import React, {FC} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {darkTheme, lightTheme} from './mui/themes'
import {useTypedSelector} from "./hooks/typedHooks";
import Header from "./components/Header/Header";
import ColorTable from "./components/ColorTable/ColorTable";
const App: FC = () => {

    const theme = useTypedSelector(state => state.themeReducer)
    const state = useTypedSelector(state => state)

    return (
        <ThemeProvider theme={theme === 'dark' ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <CssBaseline/>

            <div className="App">

                <Header/>

                <ColorTable/>

            </div>
        </ThemeProvider>

    );
}

export default App;
