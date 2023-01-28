import {FC, useEffect, useState} from "react";
import './ModalColor.scss'
import {Box, Modal} from "@mui/material";
import {useSearchParams} from "react-router-dom";
import {useActions} from "../../hooks/useActions";
import {useTypedSelector} from "../../hooks/typedHooks";
import Loading from "../Loading/Loading";

const boxStyle = {
    bgcolor: 'background.paper',
    boxShadow: 24,
};

const ModalColor: FC = () => {

    const [searchParams, setSearchParams] = useSearchParams()

    const {color, loading, error} = useTypedSelector(state => state.modalColorReducer)
    const {fetchModalColor} = useActions()
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(()=>{
        const colorID = searchParams.get('colorID')
        if (colorID){
            fetchModalColor(Number(colorID))
            setIsModalOpen(true)
        }
    },[searchParams])

    const handleClose = () => {
        setIsModalOpen(false)
        searchParams.delete('colorID')
        setSearchParams(searchParams)
    }

    if (loading){
        return <Loading/>
    } else if (error){
        return <></>
    } else if (color){
        return (
            <Modal open={isModalOpen} onClose={handleClose}>
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
    }  else {
        return <></>
    }
}

export default ModalColor