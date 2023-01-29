import {FC} from "react";
import './WarningBlock.scss'
interface WarningBlockProps {
    message: string,
    type?: string
}

const WarningBlock: FC<WarningBlockProps> = ({message, type= 'warning'}) => {
    return(
        <div className={['warning','error','success'].includes(type) ? `warning-block-${type} warning-block` : 'warning-block-warning warning-block'}>
            <div className={'warning-block__title'}>
                <h4>{type.toUpperCase()}</h4>
            </div>

            <div className={'warning-block__message'}>
                {message}
            </div>
        </div>
    )
}

export default WarningBlock
