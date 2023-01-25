import React, {FC, useState} from 'react';
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {CssBaseline, FormControlLabel, FormGroup, Typography,} from "@mui/material";
import {darkTheme, lightTheme} from './mui/themes'
import {DarkLightSwitch} from './mui/buttons'

const App: FC = () => {

    const [isDarkMode, setIsDarkMode] = useState(true)

    const ChangeThemeHandler = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <ThemeProvider theme={isDarkMode ? createTheme(darkTheme) : createTheme(lightTheme)}>
            <CssBaseline/>

            <div className="App">

                <FormGroup>

                    <FormControlLabel
                        control={<DarkLightSwitch sx={{m: 1}} checked={isDarkMode} onChange={ChangeThemeHandler}/>}
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
