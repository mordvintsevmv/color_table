import React, {FC} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline, FormControlLabel, FormGroup, Typography,} from "@mui/material";
import {darkTheme, lightTheme} from './mui/themes'
import {DarkLightSwitch} from './mui/buttons'
import {useTypedSelector} from "./hooks/typedHooks";
import {useActions} from "./hooks/useActions";

const App: FC = () => {

    const theme = useTypedSelector(state => state.themeReducer)
    const {setTheme} = useActions()

    const ChangeThemeHandler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <ThemeProvider theme={theme === 'dark' ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <CssBaseline/>

            <div className="App">

                <FormGroup>

                    <FormControlLabel
                        control={<DarkLightSwitch sx={{m: 1}} checked={theme === 'dark'} onChange={ChangeThemeHandler}/>}
                        label=""
                    />

                </FormGroup>


                <Typography variant="h3" component="h3">
                    Color Table
                </Typography>

            </div>
        </ThemeProvider>

    );
}

export default App;
