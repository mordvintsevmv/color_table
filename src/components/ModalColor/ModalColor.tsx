import {FC} from "react";
import {IColor} from "../../types/IColor";
import './ModalColor.scss'
import {Box, Modal} from "@mui/material";

interface ModalColorProps {
    color: IColor;
    open: boolean,
    onClose: any,
}

const boxStyle = {
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const ModalColor: FC<ModalColorProps> = ({color, open, onClose}) => {
    return (
    <Modal open={open} onClose={onClose}>
        <Box sx={boxStyle} className={'pantone-box'}>
            <div className={'pantone-box__color'} style={{ backgroundColor:color.color}}>

            </div>

            <span className={'pantone-box__id'}>
                         {color.id}
                     </span>

            <span className={'pantone-box__year'}>
                     {color.year}
                     </span>


            <h4 className={'pantone-box__text'}>
                PANTONE®
            </h4>

            <h5 className={'pantone-box__text'}>
                {color.pantone_value}
            </h5>

            <h5 className={'pantone-box__text'}>
                {color.name}
            </h5>


        </Box>
    </Modal>

    )
}

export default ModalColor