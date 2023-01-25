import React, {FC, useEffect} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import {darkTheme, lightTheme} from './mui/themes'
import {useTypedSelector} from "./hooks/typedHooks";
import {useActions} from "./hooks/useActions";
import Header from "./components/Header/Header";
import ColorTable from "./components/ColorTable/ColorTable";
const App: FC = () => {

    const theme = useTypedSelector(state => state.themeReducer)
    const state = useTypedSelector(state => state)

    const {fetchColors} = useActions()

    const buttonHandler = () => {
        console.log(state)
    }

    useEffect(()=>{
        fetchColors(1)
    },[])

    return (
        <ThemeProvider theme={theme === 'dark' ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <CssBaseline/>

            <div className="App">

                <Header/>

                <ColorTable/>

                <button onClick={buttonHandler}>CLICK</button>

            </div>
        </ThemeProvider>

    );
}

export default App;
