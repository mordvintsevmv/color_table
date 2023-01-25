import React, {FC} from "react";
import {DarkLightSwitch} from "../../mui/buttons";
import {useTypedSelector} from "../../hooks/typedHooks";
import {useActions} from "../../hooks/useActions";
import {Typography} from "@mui/material";
import logoTransparent from "../../img/logo-transparent.svg"
import "./Header.scss"

const Header: FC = () => {

    const theme = useTypedSelector(state => state.themeReducer)
    const {setTheme} = useActions()

    const ChangeThemeHandler = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }


    return (
        <header className={"header"}>


            <div className={"header__logo"}>
                <img src={logoTransparent} alt={"logo"}/>
            </div>

            <div className={"header__title"}>
                <Typography variant="h4" component="h1">
                    Color Table
                </Typography>
            </div>

            <div className={"header__theme-button"}>
                <DarkLightSwitch sx={{m: 1}} checked={theme === 'dark'} onChange={ChangeThemeHandler}/>
            </div>

        </header>
    )
}

export default Header