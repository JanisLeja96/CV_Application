import React, {FC} from 'react';
import Row from 'react-bootstrap/esm/Row';


export const TopPanel: FC = (props) => {
    return (
        <Row className="mt-n2 border-2 border-right-0 border-left-0 border-gray-300 h-30 py-2">
            {props.children}
        </Row>
    )
}