import {FC, ReactNode, useEffect, useState} from "react";
import './ModalColor.scss'
import {Box, Modal} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/typedHooks";
import Loading from "../Loading/Loading";
import WarningBlock from "../WarningBlock/WarningBlock";

const boxStyle = {
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const ModalColor: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const {color, loading, error} = useTypedSelector(state => state.modalColorReducer)
    const {fetchModalColor} = useActions()
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const colorID = searchParams.get('colorID')
        if (colorID) {
            fetchModalColor(Number(colorID))
            setIsModalOpen(true)
        }
    }, [searchParams])

    const handleClose = () => {
        setIsModalOpen(false)
        searchParams.delete('colorID')
        setSearchParams(searchParams)
    }

    let content: ReactNode

    if (loading) {
        content = <Loading blur={true}/>
    } else if (error) {
        content = <div className={'modal-color-block'}><WarningBlock message={error} type={'error'}/></div>
    } else if (color) {
        content =
            <Box sx={boxStyle} className={'pantone-box modal-color-block'}>
                <div className={'pantone-box__color'} style={{backgroundColor: color.color}}/>


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
    } else {
        content = <></>
    }

    return (
        <Modal open={isModalOpen} onClose={handleClose}>
            {content}
        </Modal>
    )

}

export default ModalColor