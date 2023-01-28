import {FC} from "react";
import {IColor} from "../../types/IColor";
import './ModalColor.scss'
import {Box, Modal} from "@mui/material";

interface ModalColorProps {
    color: IColor;
    open: boolean,
    onClose: any,
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 124,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
};

const ModalColor: FC<ModalColorProps> = ({color, open, onClose}) => {
    return (
    <Modal open={open} onClose={onClose}>
        <Box sx={style}>
            <div style={{height: '120px', width: '120px', backgroundColor:color.color}}>

            </div>

            <span style={{position: 'absolute', top: 0, left: '5px', color: 'rgba(0,0,0,.3)'}}>
                         {color.id}
                     </span>

            <h4 style={{padding: 0, margin: 0}}>
                PANTONE®
            </h4>

            <h5 style={{padding: 0, margin: 0}}>
                {color.pantone_value}
            </h5>

            <h5 style={{padding: 0, margin: 0}}>
                {color.name}
            </h5>

            <span style={{position: 'absolute', top: '98px', right: '5px', color: 'rgba(0,0,0,.3)'}}>
                     {color.year}
                     </span>

        </Box>
    </Modal>

    )
}

export default ModalColor