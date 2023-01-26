import {FC, useEffect, useMemo, useState} from "react";
import "./ColorTable.scss"
import {useActions} from "../../hooks/useActions";

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css'

import {useTypedSelector} from "../../hooks/typedHooks";
import {RowClickedEvent} from "ag-grid-community";

const cellRendererColors = (params: any) => {

    return {
        backgroundColor: params.data.color,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'

    }
}

const ColorTable: FC = () => {

    const {fetchColors} = useActions()
    const {colors} = useTypedSelector(state => state.colorReducer)

    const [columnDefs, setColumnDefs] = useState([
        {field: 'id', width: 30},
        {field: 'name', width: 150},
        {field: 'year', width: 60},
    ])


    const defaultColDef = useMemo(() => ({
            cellStyle: cellRendererColors,
        }
    ), [])

    const rowClickHandler = (event: RowClickedEvent) => {
        console.log(event.data)
    }

    useEffect(()=>{
        fetchColors(1)
    },[])

    return(
        <div className={"color-table"}>

            <div className={'ag-grid-material color-table__ag-grid'}>

                <AgGridReact
                    rowData={colors}
                    columnDefs={columnDefs}
                    onRowClicked={rowClickHandler}
                    defaultColDef={defaultColDef}
                    rowHeight={30}

                />

            </div>

        </div>
    )
}

export default ColorTable