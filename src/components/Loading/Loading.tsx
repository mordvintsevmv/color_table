import {FC} from "react";
import {CircularProgress} from "@mui/material";
import './Loading.scss'
const Loading: FC = () => {
    return(
        <div className={"loading__wrapper"}>
            <div className={"loading__ring"}>
                <CircularProgress/>
            </div>
        </div>
    )
}

export default Loading