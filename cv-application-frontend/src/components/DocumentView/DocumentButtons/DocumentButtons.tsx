import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import {Link, useHistory} from "react-router-dom";

type Props = {
    documentId: string
}

export const DocumentButtons = (props: Props) => {
    const history = useHistory();

    return (
        <div className="space-x-4 mt-2 ml-4">
            <Button className="w-24 h-16 rounded-xl" onClick={() => history.goBack()}>Back</Button>
            <Link to={`/${props.documentId}/edit`}>
                <Button className="w-24 h-16 rounded-xl">Edit</Button>
            </Link>
        </div>
    )
}