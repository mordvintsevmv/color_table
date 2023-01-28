import {FC} from "react";
import {CircularProgress} from "@mui/material";
import './Loading.scss'

interface LoadingProps {
    blur?: boolean
}
const Loading: FC<LoadingProps> = ({blur = false}) => {
    return(
        <div className={blur ? "loading__wrapper-blur" : ''}>
            <div className={"loading__ring"}>
                <CircularProgress/>
            </div>
        </div>
    )
}

export default Loading